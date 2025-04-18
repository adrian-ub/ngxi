import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAddressBookIcon],svg[icon-park-twotone-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAddressBook0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 36v8h32V4H8v8M6 30h4m-4-6h4m-4-6h4"></svg:path><svg:circle cx="24" cy="17" r="4" fill="#555"></svg:circle><svg:path d="M32 35a8 8 0 1 0-16 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAddressBook0)"></svg:path>`,
})
export class IconParkTwotoneAddressBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
