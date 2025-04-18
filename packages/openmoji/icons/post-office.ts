import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPostOfficeIcon],svg[openmoji-post-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M13 14h46v46H13z"></svg:path><svg:circle cx="37" cy="37" r="6" fill="#fcea2b"></svg:circle><svg:path fill="#92d3f5" d="M29.5 50h13v10h-13z"></svg:path><svg:path fill="none" stroke="#92d3f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M51 30h2v5h-2zm0-10h2v5h-2zm-16 0h2v5h-2zm8 0h2v5h-2zm-16 0h2v5h-2zm24 20h2v5h-2zm0 10h2v5h-2zM19 30h2v5h-2zm0-10h2v5h-2zm0 20h2v5h-2zm0 10h2v5h-2z"></svg:path><svg:circle cx="37" cy="37" r="3" fill="#d0cfce"></svg:circle><svg:path fill="#fcea2b" d="m31 34.5l-4.3 4.3L32 41l1-1zM47 37l-4 4l-2-2l3.9-4z"></svg:path><svg:path fill="#fcea2b" d="M43 41a8.9 8.9 0 0 1-6 2a8.9 8.9 0 0 1-6-2l2-2a10.7 10.7 0 0 0 4 1a10.7 10.7 0 0 0 4-1Z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 14h46v46H13z"></svg:path><svg:path d="M43 36.9L41 39a11.2 11.2 0 0 1-3.8 1a3 3 0 1 0-.4 0a9.3 9.3 0 0 1-3.8-1l-.3.3l-1.5-4A6.027 6.027 0 0 1 43 36.9M29.5 50h13v10h-13zM36 60V50"></svg:path><svg:path d="m32.7 39.3l-1.4 1.4l-4.6-1.9l4.3-4.3l.2.8zM47 37l-4 4l-2-2l2-2.1l1.9-1.9z"></svg:path><svg:path d="M43 41a8.8 8.8 0 0 1-5.5 2h-.9a8.88 8.88 0 0 1-5.6-2l2-2a11.2 11.2 0 0 0 3.8 1h.4a9.3 9.3 0 0 0 3.8-1ZM21 25h-2v-5m34 15h-2v-5m-6-5h-2v-5m10 5h-2v-5m-14 5h-2v-5m-6 5h-2v-5m-6 15h-2v-5m2 15h-2v-5m34 5h-2v-5m2 15h-2v-5m-30 5h-2v-5"></svg:path></svg:g>`,
})
export class OpenmojiPostOfficeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
