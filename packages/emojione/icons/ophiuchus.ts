import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneOphiuchusIcon],svg[emojione-ophiuchus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#c28fef"></svg:circle><svg:g fill="#fff"><svg:path d="M32 54c-9.4 0-17-7.6-17-17V14h6v23c0 6.1 4.9 11 11 11s11-4.9 11-11V14h6v23c0 9.4-7.6 17-17 17"></svg:path><svg:path d="M56 22c-2.6 4.1-6.1 6-8.4 7.2c-3.5 2-7.9-.2-11.7-2.1q-1.8-.9-3.3-1.5c-10.9-4.2-19.1-.5-24.6 4.9V38c3.6-4.8 12.1-10.3 22.5-6.2c.8.3 1.8.8 2.8 1.3c4 2 9.2 4.6 14.5 3c.8-.2 1.7-.6 2.5-1.1c2-1.2 4-2.1 5.6-4.5z"></svg:path></svg:g>`,
})
export class EmojioneOphiuchusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
