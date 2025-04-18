import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPageFooterOutlineRoundedIcon],svg[material-symbols-light-page-footer-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 20h-15q-.213 0-.357-.143T4 19.5t.143-.357T4.5 19h15q.214 0 .357.143T20 19.5t-.143.357T19.5 20M5.616 16.616q-.691 0-1.153-.463T4 15V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616V15q0 .69-.462 1.153t-1.153.463zm0-1h12.769q.269 0 .442-.174Q19 15.27 19 15V5.616q0-.27-.173-.443T18.385 5H5.615q-.269 0-.442.173T5 5.616V15q0 .27.173.442q.173.173.443.173m-.616 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightPageFooterOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
