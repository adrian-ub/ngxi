import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubblePlainStroke16Icon],svg[garden-speech-bubble-plain-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1 .5h14c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5H8l-3.6 3.6c-.3.3-.9.1-.9-.4v-3.3H1c-.3 0-.5-.2-.5-.5V1C.5.7.7.5 1 .5z"></svg:path>`,
})
export class GardenSpeechBubblePlainStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
