import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLinkedinIcon],svg[openmoji-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="50" height="50" x="11" y="11" fill="#61b2e4" rx="3"></svg:rect><svg:path fill="#fff" d="M20 30h6v21h-6z"></svg:path><svg:circle cx="23" cy="22" r="3.5" fill="#fff"></svg:circle><svg:path fill="#fff" d="M42.5 35c-2.209 0-4 1.168-4 4.5V51h-6V30h6v2.21h-.002A7.98 7.98 0 0 1 44.5 29.5c4.418 0 8 3.3 8 9V51h-6V39.5c0-3.332-1.79-4.5-4-4.5"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:rect width="50" height="50" x="11" y="11" stroke-miterlimit="10" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 30h6v21h-6z"></svg:path><svg:circle cx="23" cy="22" r="3.5" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42.5 35c-2.209 0-4 1.168-4 4.5V51h-6V30h6v2.21h-.002A7.98 7.98 0 0 1 44.5 29.5c4.418 0 8 3.3 8 9V51h-6V39.5c0-3.332-1.79-4.5-4-4.5"></svg:path></svg:g>`,
})
export class OpenmojiLinkedinIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
