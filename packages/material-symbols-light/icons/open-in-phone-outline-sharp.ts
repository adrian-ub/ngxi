import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOpenInPhoneOutlineSharpIcon],svg[material-symbols-light-open-in-phone-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22v-7h1v3.5h10v-13H7V9H6V2h12v20zm1-2.5V21h10v-1.5zm3-4.192l-.708-.708l2.089-2.1H2.5v-1h8.88L9.293 9.4L10 8.692L13.308 12zM7 4.5h10V3H7zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightOpenInPhoneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
