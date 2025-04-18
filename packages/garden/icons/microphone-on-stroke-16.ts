import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMicrophoneOnStroke16Icon],svg[garden-microphone-on-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="5" height="11" x="5.5" y=".5" rx="2.5" ry="2.5"></svg:rect><svg:path stroke-linecap="round" d="M3.5 6.5V9a4.5 4.5 0 0 0 9 0V6.5"></svg:path></svg:g><svg:path fill="currentColor" d="M7 13h2v3H7z"></svg:path>`,
})
export class GardenMicrophoneOnStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
