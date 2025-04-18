import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMicrophoneOnStroke12Icon],svg[garden-microphone-on-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="3" height="7" x="4.5" y=".5" rx="1.5" ry="1.5"></svg:rect><svg:path stroke-linecap="round" d="M9.5 5.5V6A3.5 3.5 0 0 1 6 9.5A3.5 3.5 0 0 1 2.5 6v-.5"></svg:path></svg:g><svg:path fill="currentColor" d="M5 9.5h2V12H5z"></svg:path>`,
})
export class GardenMicrophoneOnStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
