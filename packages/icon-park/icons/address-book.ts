import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddressBookIcon],svg[icon-park-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 36V44H40V4H8V12"></svg:path><svg:path d="M6 30H10"></svg:path><svg:path d="M6 24H10"></svg:path><svg:path d="M6 18H10"></svg:path><svg:circle cx="24" cy="17" r="4" fill="#2F88FF"></svg:circle><svg:path d="M32 35C32 30.5817 28.4183 27 24 27C19.5817 27 16 30.5817 16 35"></svg:path></svg:g>`,
})
export class IconParkAddressBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
