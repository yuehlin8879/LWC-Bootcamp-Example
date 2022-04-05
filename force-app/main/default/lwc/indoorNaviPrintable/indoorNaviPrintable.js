import { LightningElement, api } from "lwc";

export default class IndoorNaviPrintable extends LightningElement {
    // a public variable that receives a list of directions from the parent component
    @api directions = [];
}
