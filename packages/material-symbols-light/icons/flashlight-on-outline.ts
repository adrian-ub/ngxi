import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashlightOnOutlineIcon],svg[material-symbols-light-flashlight-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21V10.692l-2-3V3h10v4.692l-2 3V21zm3.002-6q-.416 0-.709-.291T11 14.002t.291-.709t.707-.293t.709.291t.293.707t-.291.709t-.707.293M8 5.5h8V4H8zm8 1H8v.9l2 3V20h4v-9.6l2-3zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightFlashlightOnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
