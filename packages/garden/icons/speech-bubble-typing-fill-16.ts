import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubbleTypingFill16Icon],svg[garden-speech-bubble-typing-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h14c.55 0 1 .45 1 1v9.96c0 .55-.45 1-1 1H7.54l-3.69 3.69c-.31.32-.85.1-.85-.35v-3.34H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1m3 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class GardenSpeechBubbleTypingFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
