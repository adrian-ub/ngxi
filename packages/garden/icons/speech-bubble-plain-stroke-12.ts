import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubblePlainStroke12Icon],svg[garden-speech-bubble-plain-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"></svg:path>`,
})
export class GardenSpeechBubblePlainStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
