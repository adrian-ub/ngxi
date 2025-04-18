import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCreditCardOffOutlineSharpIcon],svg[material-symbols-light-credit-card-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.189l-1-1v-5.997h-5.996l-2.385-2.384H20V6H8.812l-1-1H21zM9.766 11.192H4V18h12.573zm11.338 11.339L17.573 19H3V5h2l1 1H4v2.808h3.38l-5.5-5.5l.714-.714l19.223 19.223z"></svg:path>`,
})
export class MaterialSymbolsLightCreditCardOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
