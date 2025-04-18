import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubbleTypingStroke12Icon],svg[garden-speech-bubble-typing-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2M0 8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L6.414 9H11a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1zm3 3V8H1V1h10v7H6z"></svg:path>`,
})
export class GardenSpeechBubbleTypingStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
