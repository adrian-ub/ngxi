import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSpeechBalloonIcon],svg[twemoji-speech-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BDDDF4" d="M18 1C8.059 1 0 7.268 0 15c0 4.368 2.574 8.268 6.604 10.835C6.08 28.144 4.859 31.569 2 35c5.758-.96 9.439-3.761 11.716-6.416c1.376.262 2.805.416 4.284.416c9.941 0 18-6.268 18-14S27.941 1 18 1"></svg:path><svg:circle cx="18" cy="15" r="2" fill="#2A6797"></svg:circle><svg:circle cx="26" cy="15" r="2" fill="#2A6797"></svg:circle><svg:circle cx="10" cy="15" r="2" fill="#2A6797"></svg:circle>`,
})
export class TwemojiSpeechBalloonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
