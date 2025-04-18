import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyEmojiKissNervousIcon],svg[streamline-smiley-emoji-kiss-nervous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="m7.231 7.001l.447.097a.858.858 0 0 1 .36 1.503l-.37.3l.37.3a.858.858 0 0 1-.36 1.504l-.447.097M10.5 4l-2 1.5l2 1M3.5 4l2 1.5l-2 1"></svg:path></svg:g>`,
})
export class StreamlineSmileyEmojiKissNervousIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
