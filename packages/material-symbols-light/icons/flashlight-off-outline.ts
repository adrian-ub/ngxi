import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashlightOffOutlineIcon],svg[material-symbols-light-flashlight-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.589 21.523l-5.108-5.108V21h-6V10.416L2.304 4.239l.708-.708l17.284 17.284zM9.48 20h4v-4.584l-4-4zm5-7.85l-1-1v-.75l2-3v-.9H8.83l-1-1h7.65V4H7.216v.885L6.48 4.15V3h10v4.692l-2 3zm-2.633-2.633"></svg:path>`,
})
export class MaterialSymbolsLightFlashlightOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
