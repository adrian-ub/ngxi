import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMicrophoneOffStroke16Icon],svg[garden-microphone-off-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5.5 7.5V3C5.5 1.6 6.6.5 8 .5s2.5 1.1 2.5 2.5m0 5.5V9c0 1.4-1.1 2.5-2.5 2.5m-6.5 3l13-13M5.9 13c.6.3 1.3.5 2.1.5c2.5 0 4.5-2 4.5-4.5V6.5m-9 0v2.9"></svg:path><svg:path fill="currentColor" d="M7 13h2v3H7z"></svg:path>`,
})
export class GardenMicrophoneOffStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
