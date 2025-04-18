import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubbleTypingFill12Icon],svg[garden-speech-bubble-typing-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.75 0h10.5c.412 0 .75.338.75.75v7.47c0 .412-.338.75-.75.75H5.655l-2.768 2.768a.371.371 0 0 1-.637-.263V8.97H.75A.75.75 0 0 1 0 8.22V.75C0 .338.338 0 .75 0M3 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class GardenSpeechBubbleTypingFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
