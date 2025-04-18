import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBrailleIcon],svg[mdi-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.52.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H8c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L7 18zm12.5-6A1.5 1.5 0 0 0 18 3.5A1.5 1.5 0 0 0 19.5 5A1.5 1.5 0 0 0 21 3.5A1.5 1.5 0 0 0 19.5 2m0 5A1.5 1.5 0 0 0 18 8.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 21 8.5A1.5 1.5 0 0 0 19.5 7m-5 0A1.5 1.5 0 0 0 13 8.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 16 8.5A1.5 1.5 0 0 0 14.5 7m5 5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiBrailleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
