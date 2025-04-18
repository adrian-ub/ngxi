import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyEmojiTerrifiedIcon],svg[streamline-smiley-emoji-terrified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="m10.5 4l-2 1.5l2 1M3.5 4l2 1.5l-2 1m1 3.5S6 7.5 7 7.5S9.5 10 9.5 10"></svg:path></svg:g>`,
})
export class StreamlineSmileyEmojiTerrifiedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
