import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneOilDrumIcon],svg[emojione-oil-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3e4347"><svg:path d="M7.1 6.9h49.8v50.2H7.1z"></svg:path><svg:ellipse cx="32" cy="57.1" rx="26" ry="4.9"></svg:ellipse><svg:ellipse cx="32" cy="23.6" rx="26" ry="4.9"></svg:ellipse><svg:ellipse cx="32" cy="40.4" rx="26" ry="4.9"></svg:ellipse></svg:g><svg:g fill="#d0d0d0"><svg:ellipse cx="32" cy="6.9" rx="26" ry="4.9"></svg:ellipse><svg:path d="M7.4 22.4c3.5 1.9 13.2 4.2 24.6 4.2s21.1-2.3 24.6-4.2c-6.2.9-14.9 2.4-24.6 2.4s-18.4-1.4-24.6-2.4m0 16.9c3.5 1.9 13.2 4.2 24.6 4.2s21.1-2.3 24.6-4.2c-6.2.9-14.9 2.4-24.6 2.4s-18.4-1.5-24.6-2.4m0 16.3c3.5 1.9 13.2 4.2 24.6 4.2s21.1-2.3 24.6-4.2c-6.2.9-15 2.4-24.6 2.4s-18.4-1.5-24.6-2.4"></svg:path></svg:g><svg:ellipse cx="15.7" cy="6.9" fill="#3e4347" rx="3.9" ry="1"></svg:ellipse>`,
})
export class EmojioneOilDrumIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
