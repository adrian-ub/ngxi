import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBacklightHighOffIcon],svg[material-symbols-light-backlight-high-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.616 14.5v-1H5v1zM11.5 7V2.616h1V7zm5.766 2.385l-.689-.708l2.44-2.402l.695.708zM19 14.5v-1h3.385v1zm.833 6.76L15.573 17H7.5v-2h6.073L2.74 4.167l.714-.713l17.092 17.092z"></svg:path>`,
})
export class MaterialSymbolsLightBacklightHighOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
