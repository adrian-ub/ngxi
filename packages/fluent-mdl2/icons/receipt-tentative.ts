import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReceiptTentativeIcon],svg[fluent-mdl2-receipt-tentative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 256q97 0 187 25t168 71t143 110t110 142t71 169t25 187q0 97-25 187t-71 168t-110 143t-142 110t-169 71t-187 25q-97 0-187-25t-168-71t-143-110t-110-142t-71-169T0 960q0-97 25-187t71-168t110-143t142-110t169-71t187-25m0 1280q119 0 224-45t183-124t123-183t46-224q0-119-45-224t-124-183t-183-123t-224-46q-119 0-224 45T297 553T174 736t-46 224q0 119 45 224t124 183t183 123t224 46m960-640h384v128h-384zm384-384v128h-512V512zm-384 768h384v128h-384zm-1024 0h128v128H640zm64-768q53 0 99 20t82 55t55 81t20 100q0 46-14 81t-35 63t-47 50t-46 45t-36 45t-14 52v48H640v-48q0-46 14-81t35-63t47-50t46-45t36-45t14-52q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50H448q0-53 20-99t55-82t81-55t100-20"></svg:path>`,
})
export class FluentMdl2ReceiptTentativeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
