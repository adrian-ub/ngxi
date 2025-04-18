import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneStarAndCrescentIcon],svg[emojione-star-and-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#c28fef"><svg:path d="M40.6 58.2c-14.2 0-25.7-11.8-25.7-26.2S26.4 5.8 40.6 5.8c2.2 0 4.4.2 6.4.8C42.5 3.7 37.1 2 31.4 2C15.2 2 2 15.4 2 32s13.2 30 29.4 30c5.7 0 11.1-1.7 15.6-4.6c-2 .6-4.2.8-6.4.8"></svg:path><svg:path d="m49.8 38l7.5 5.2l-2.8-8.5l7.5-5.4h-9.3l-2.9-8.5l-2.9 8.5h-9.3l7.5 5.4l-2.8 8.5z"></svg:path></svg:g>`,
})
export class EmojioneStarAndCrescentIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
