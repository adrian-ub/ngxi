import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiLockOpenIcon],svg[arcticons-emoji-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.348 15.152c0-5.33 4.321-9.652 9.652-9.652s9.652 4.321 9.652 9.652v7.641"></svg:path><svg:circle cx="24" cy="32.647" r="3.016" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.522 22.793h28.956V42.5H9.522z"></svg:path>`,
})
export class ArcticonsEmojiLockOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
