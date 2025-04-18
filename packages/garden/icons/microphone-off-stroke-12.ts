import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMicrophoneOffStroke12Icon],svg[garden-microphone-off-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M9.5 5.5V6A3.504 3.504 0 0 1 6 9.5a3.4 3.4 0 0 1-.9-.12M2.5 5.5V6a3.4 3.4 0 0 0 .12.9m-1.102 3.582l8.98-8.98M7.36 6.62a1.4 1.4 0 0 1-.74.74M4.5 5V2a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill="currentColor" d="M5 9.5h2V12H5z"></svg:path>`,
})
export class GardenMicrophoneOffStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
