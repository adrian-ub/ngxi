import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOpenInPhoneIcon],svg[material-symbols-open-in-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21v-6h2v3h10V6H7v3H5V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm3-7l-1.4-1.4l1.55-1.6H2v-2h8.15L8.6 9.4L10 8l4 4z"></svg:path>`,
})
export class MaterialSymbolsOpenInPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
