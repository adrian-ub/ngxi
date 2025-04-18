import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDynamicFeedRoundedIcon],svg[material-symbols-light-dynamic-feed-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.846 19.77q-.69 0-1.153-.463t-.462-1.153v-5.116q0-.213.143-.356t.357-.144t.357.144t.143.356v5.116q0 .23.192.423q.193.192.423.192h7.116q.213 0 .356.144t.144.356t-.144.357t-.356.143zM8.616 16q-.691 0-1.153-.462T7 14.385V9.269q0-.213.143-.357T7.5 8.77t.357.143T8 9.27v5.116q0 .23.192.423t.423.192h7.116q.213 0 .357.143t.143.357t-.144.357t-.356.143zm3.769-3.77q-.69 0-1.153-.462t-.463-1.153V5.847q0-.69.463-1.153t1.153-.462h6.769q.69 0 1.153.462t.462 1.153v4.77q0 .69-.462 1.152t-1.153.463zm0-1h6.769q.23 0 .423-.191q.192-.193.192-.423V7.23h-8v3.385q0 .23.192.423t.423.192"></svg:path>`,
})
export class MaterialSymbolsLightDynamicFeedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
