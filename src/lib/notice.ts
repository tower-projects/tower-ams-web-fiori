import { writable } from "svelte/store"

export class Notice {

    constructor(kind: string, caption: string, title: string, subtitle: string) {
        this.kind = kind
        this.title = title
        this.subTitle = subtitle
        this.caption = caption
    }

    id: number = new Date().getTime() - Math.floor(Math.random() * 9999)

    /**
     * Specify the kind of notification
     * @type {"error" | "info" | "info-square" | "success" | "warning" | "warning-alt"}
     */
    kind: string

    title: string

    subTitle: string

    caption: string

    timeout: number = 5000

}

export default class NoticeUtils {

    static store = writable(new Array<Notice>())

    static error(caption: string, title: string, subtitle: string = "⚡️请联系管理员处理⚡️"): void {
        this.addNotification(new Notice("error", caption, title, subtitle));
    }

    static success() {
        this.addNotification(new Notice("success", "操作成功", "", ""));
    }

    static addNotification(notification: Notice): void {
        this.store.update(e => [notification, ...e])
    }

    static clearNotification() {
        this.store.set([])
    }

    static removeNotification(notificationId: number) {
        if (!notificationId) return;

        console.info("removeNotification  " + notificationId)

        this.store.update((notifications) => notifications.filter(({ id }) => id !== notificationId));
    }
}