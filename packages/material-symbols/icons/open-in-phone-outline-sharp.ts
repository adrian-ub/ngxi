import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOpenInPhoneOutlineSharpIcon],svg[material-symbols-open-in-phone-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 23v-8h2v3h10V6H7v3H5V1h14v22zm2-3v1h10v-1zm3-4l-1.4-1.4l1.55-1.6H2v-2h8.15L8.6 9.4L10 8l4 4zM7 4h10V3H7zm0 0V3zm0 16v1z"></svg:path>`,
})
export class MaterialSymbolsOpenInPhoneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
