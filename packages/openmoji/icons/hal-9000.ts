import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHal9000Icon],svg[openmoji-hal-9000-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiHal90000" fill="none" d="M26 5h20v62H26z"></svg:path></svg:defs><svg:circle cx="36" cy="40" r="1"></svg:circle><svg:path fill="#3F3F3F" stroke="#000" stroke-linejoin="round" d="M26 5h20v62H26z"></svg:path><svg:path fill="#9B9B9A" d="M26 53h20v14H26z"></svg:path><svg:circle cx="36" cy="40" r="8" fill="#D22F27" stroke="#D0CFCE"></svg:circle><svg:circle r="4" fill="#EA5A47" transform="matrix(-1 0 0 1 36 40)"></svg:circle><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41 40a4.993 4.993 0 0 0-5-5"></svg:path><svg:circle cx="36" cy="40" r="2" fill="#F1B31C"></svg:circle><svg:circle cx="36" cy="40" r="1" fill="#FCEA2B"></svg:circle><svg:path fill="#61B2E4" d="M28 7h8v4h-8z"></svg:path><svg:g stroke="#000"><svg:use href="#openmojiHal90000" stroke-linejoin="round"></svg:use><svg:circle cx="36" cy="40" r="7" fill="none"></svg:circle><svg:path stroke-linecap="round" d="M27.5 52.5h17"></svg:path><svg:path fill="none" stroke-linejoin="round" d="M28 7h16v4H28z"></svg:path><svg:use href="#openmojiHal90000" stroke-linejoin="round"></svg:use></svg:g>`,
})
export class OpenmojiHal9000Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
