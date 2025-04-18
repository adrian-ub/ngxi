import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubblePlainFill12Icon],svg[garden-speech-bubble-plain-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0H1C.45 0 0 .45 0 1v7c0 .55.45 1 1 1h1v2.29c0 .45.54.67.85.35L5.5 9H11c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1"></svg:path>`,
})
export class GardenSpeechBubblePlainFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
