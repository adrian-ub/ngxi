import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleChatIcon],svg[arcticons-google-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="26.648" height="22.207" x="14.463" y="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.621"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.916 13.575H9.51a2.62 2.62 0 0 0-2.622 2.621v24.753a1.049 1.049 0 0 0 1.79.742l5.91-5.91h16.328a2.62 2.62 0 0 0 2.62-2.62V16.196a2.62 2.62 0 0 0-2.62-2.621"></svg:path>`,
})
export class ArcticonsGoogleChatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
