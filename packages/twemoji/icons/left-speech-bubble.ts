import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLeftSpeechBubbleIcon],svg[twemoji-left-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8CCAF7" d="M18 1c9.941 0 18 6.268 18 14c0 4.368-2.574 8.268-6.604 10.835C29.92 28.144 31.141 31.569 34 35c-5.758-.96-9.44-3.761-11.716-6.416A23 23 0 0 1 18 29C8.059 29 0 22.732 0 15S8.059 1 18 1"></svg:path>`,
})
export class TwemojiLeftSpeechBubbleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
