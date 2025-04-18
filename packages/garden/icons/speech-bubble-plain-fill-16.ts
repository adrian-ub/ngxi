import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubblePlainFill16Icon],svg[garden-speech-bubble-plain-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0H1C.45 0 0 .45 0 1v9.96c0 .55.45 1 1 1h2v3.34c0 .45.54.67.85.35l3.69-3.69H15c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1"></svg:path>`,
})
export class GardenSpeechBubblePlainFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
