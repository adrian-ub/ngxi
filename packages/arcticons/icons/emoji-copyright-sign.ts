import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiCopyrightSignIcon],svg[arcticons-emoji-copyright-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.495 19.313C32.7 15.3 28.68 12.5 24 12.5c-6.351 0-11.5 5.149-11.5 11.5S17.649 35.5 24 35.5c4.68 0 8.7-2.8 10.495-6.813"></svg:path>`,
})
export class ArcticonsEmojiCopyrightSignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
