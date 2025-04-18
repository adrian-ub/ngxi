import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashlightOffIcon],svg[material-symbols-light-flashlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.48 21V10.416L2.305 4.239l.708-.708l17.284 17.284l-.707.708l-5.108-5.108V21zm-2-16.85V3h10v2.5H7.83zm8 8L8.83 6.5h7.65v1.192l-2 3z"></svg:path>`,
})
export class MaterialSymbolsLightFlashlightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
