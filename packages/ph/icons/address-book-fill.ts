import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAddressBookFillIcon],svg[ph-address-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 112a24 24 0 1 1-24-24a24 24 0 0 1 24 24m64-72v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16v-24H32a8 8 0 0 1 0-16h16v-40H32a8 8 0 0 1 0-16h16V80H32a8 8 0 0 1 0-16h16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-33.6 123.2a67.9 67.9 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 81.6 163.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6"></svg:path>`,
})
export class PhAddressBookFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
