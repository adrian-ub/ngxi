import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAltitudeOutlineIcon],svg[material-symbols-light-altitude-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12V7.108l-2.1 2.08l-.688-.688L19 5.212L22.288 8.5l-.688.714l-2.1-2.1V12zM2.904 20.173l4.192-5.615l3.462 4.615h8.538l-5-6.65l-3 3.993l-.634-.843l3.634-4.846l7 9.346zm8.192-1"></svg:path>`,
})
export class MaterialSymbolsLightAltitudeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
