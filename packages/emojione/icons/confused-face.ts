import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneConfusedFaceIcon],svg[emojione-confused-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffdd67" d="M2.5 37.2c2.9 16.3 18.4 27.2 34.8 24.3c16.3-2.9 27.2-18.4 24.3-34.8C58.7 10.5 43.1-.4 26.8 2.5C10.5 5.3-.4 20.9 2.5 37.2"></svg:path><svg:g fill="#664e27"><svg:circle cx="42.4" cy="24.7" r="5"></svg:circle><svg:circle cx="19.7" cy="28.7" r="5"></svg:circle><svg:path d="M43.3 41.8c-5.8-1.5-12-.4-16.9 3c-1.2.9 1.1 4 2.3 3.2c3.2-2.3 8.4-3.8 13.7-2.4c1.3.3 2.4-3.3.9-3.8"></svg:path></svg:g>`,
})
export class EmojioneConfusedFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
