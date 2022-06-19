<script lang="ts">
    import {
        Dialog,
        DialogHeader,
        DialogBody,
        DialogFooter,
        Bar,
        BarLeft,
        BarElement,
        BarRight,
        Icon,
        GridForm,
        Row,
        Col,
        Label,
        Input,
        Button,
        TextArea
    } from "$component";
    import {post, put} from "$lib/api";

    type source = {
        id: number,
        name: string,
        comment: string
    }

    export let create = false;

    export let object: source = {id: -1, name: "", comment: ""};

    const addSource = () => {
        put("CreateAlarmSource", object).then(() => create = false)
    }
</script>

<Dialog active={create}>
    <DialogHeader>
        <Bar>
            <BarLeft>
                <BarElement>
                    <h3>
                        创建警报源
                    </h3>
                </BarElement>
            </BarLeft>
            <BarRight>
                <BarElement>
                    <Icon icon="create"></Icon>
                </BarElement>
            </BarRight>
        </Bar>
    </DialogHeader>
    <DialogBody>
        <GridForm>
            <Row>
                <Col>
                    <Label required for="name-input">警报源名</Label>
                </Col>
                <Col>
                    <Input id="name-input" bind:value={object.name}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label for="comment-input">备注</Label>
                </Col>
                <Col>
                    <TextArea id="comment-input" bind:value={object.comment}/>
                </Col>
            </Row>
        </GridForm>

    </DialogBody>
    <DialogFooter>
        <Bar footer>
            <BarRight>
                <BarElement>
                    <Button kind="primary" compact on:click={addSource}>OK</Button>
                </BarElement>
                <BarElement>
                    <Button compact on:click={()=>{create=false}}>Cancel</Button>
                </BarElement>
            </BarRight>
        </Bar>
    </DialogFooter>
</Dialog>