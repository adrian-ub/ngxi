import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHandbagIcon],svg[openmoji-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiHandbag0" d="M61 60.958H11L13 28.5h46z"></svg:path></svg:defs><svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#6A462F" d="M61 60.958H11L13 28.5h46z"></svg:path><svg:path fill="#D0CFCE" d="M21.954 31.943h9.21v9.21h-9.21zm20.93 0h9.21v9.21h-9.21z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiHandbag0"></svg:use><svg:path d="M21.954 31.943h9.21v9.21h-9.21zm20.93 0h9.21v9.21h-9.21zM24.52 25.187c0-8.566 1.31-15.511 11.484-15.511S47.49 16.62 47.49 25.187"></svg:path><svg:use href="#openmojiHandbag0"></svg:use></svg:g>`,
})
export class OpenmojiHandbagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
