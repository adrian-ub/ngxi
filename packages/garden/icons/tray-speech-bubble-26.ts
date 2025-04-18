import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTraySpeechBubble26Icon],svg[garden-tray-speech-bubble-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.3 16.9l.003-14.3a1.3 1.3 0 0 1 1.3-1.3H23.4a1.3 1.3 0 0 1 1.3 1.3l-.002 14.3a1.3 1.3 0 0 1-1.3 1.3H13l-5.391 5.39a.65.65 0 0 1-1.11-.46V18.2H2.601a1.3 1.3 0 0 1-1.3-1.3Zm5.526-5.525a1.625 1.625 0 1 0 0-3.25a1.625 1.625 0 0 0 0 3.25m7.8-1.625a1.625 1.625 0 1 0-3.25 0a1.625 1.625 0 0 0 3.25 0m4.55 1.625a1.625 1.625 0 1 0 0-3.25a1.625 1.625 0 0 0 0 3.25"></svg:path>`,
})
export class GardenTraySpeechBubble26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
