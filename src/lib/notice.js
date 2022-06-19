import { writable } from "svelte/store";
export class Notice {
    constructor(kind, caption, title, subtitle) {
        this.kind = kind;
        this.title = title;
        this.subTitle = subtitle;
        this.caption = caption;
    }
    id = new Date().getTime() - Math.floor(Math.random() * 9999);
    /**
     * Specify the kind of notification
     * @type {"error" | "info" | "info-square" | "success" | "warning" | "warning-alt"}
     */
    kind;
    title;
    subTitle;
    caption;
    timeout = 5000;
}
export default class NoticeUtils {
    static store = writable(new Array());
    static error(caption, title, subtitle = "⚡️请联系管理员处理⚡️") {
        this.addNotification(new Notice("error", caption, title, subtitle));
    }
    static success() {
        this.addNotification(new Notice("success", "操作成功", "", ""));
    }
    static addNotification(notification) {
        this.store.update(e => [notification, ...e]);
    }
    static clearNotification() {
        this.store.set([]);
    }
    static removeNotification(notificationId) {
        if (!notificationId)
            return;
        console.info("removeNotification  " + notificationId);
        this.store.update((notifications) => notifications.filter(({ id }) => id !== notificationId));
    }
}
//# sourceMappingURL=notice.js.map