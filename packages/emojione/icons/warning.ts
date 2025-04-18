import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWarningIcon],svg[emojione-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffce31" d="M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3z"></svg:path><svg:g fill="#231f20"><svg:path d="m27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0"></svg:path><svg:circle cx="32" cy="49.6" r="4.2"></svg:circle></svg:g>`,
})
export class EmojioneWarningIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
