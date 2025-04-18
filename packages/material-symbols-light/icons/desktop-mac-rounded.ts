import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopMacRoundedIcon],svg[material-symbols-light-desktop-mac-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.154 17.346H4.616q-.691 0-1.153-.462T3 15.73V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616V15.73q0 .69-.463 1.153t-1.153.462h-6.538l1.773 1.773q.05.05.112.273v.224q0 .161-.112.273t-.273.111H9.542q-.111 0-.192-.08t-.08-.193v-.385q0-.05.08-.192z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopMacRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
