import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMicrophoneOnFill12Icon],svg[garden-microphone-on-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 9.5h2V12H5z"></svg:path><svg:rect width="4" height="8" x="4" rx="2" ry="2"></svg:rect></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M9.5 5.5V6A3.5 3.5 0 0 1 6 9.5A3.5 3.5 0 0 1 2.5 6v-.5"></svg:path>`,
})
export class GardenMicrophoneOnFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
