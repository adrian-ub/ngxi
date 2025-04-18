import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAddressBookIcon],svg[tdesign-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a4 4 0 0 1 4-4h14v20H7a4 4 0 0 1-4-4zm2 8.535A4 4 0 0 1 7 14h12V4h-2v6.766l-3.5-2.1l-3.5 2.1V4H7a2 2 0 0 0-2 2zM19 16H7a2 2 0 1 0 0 4h12zM15 4h-3v3.234l1.5-.9l1.5.9z"></svg:path>`,
})
export class TdesignAddressBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
