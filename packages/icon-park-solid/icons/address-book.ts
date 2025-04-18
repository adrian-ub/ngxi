import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAddressBookIcon],svg[icon-park-solid-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 36v8h32V4H8v8M6 30h4m-4-6h4m-4-6h4"></svg:path><svg:circle cx="24" cy="17" r="4" fill="currentColor"></svg:circle><svg:path d="M32 35a8 8 0 1 0-16 0"></svg:path></svg:g>`,
})
export class IconParkSolidAddressBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
