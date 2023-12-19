"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExecutionEnvironment_1 = __importDefault(require("@docusaurus/ExecutionEnvironment"));
if (ExecutionEnvironment_1.default.canUseDOM) {
    /**
     * @see https://github.com/rohit-gohri/redocusaurus/issues/89#issuecomment-942256382
     */
    // @ts-expect-error prism global
    window.Prism = window.Prism || {};
    // @ts-expect-error prism global
    window.Prism.manual = true;
}
//# sourceMappingURL=global.js.map