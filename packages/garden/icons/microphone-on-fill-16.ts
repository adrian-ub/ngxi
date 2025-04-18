import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMicrophoneOnFill16Icon],svg[garden-microphone-on-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="6" height="12" x="5" rx="3" ry="3"></svg:rect><svg:path d="M7 13h2v3H7z"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.5 6.5V9a4.5 4.5 0 0 0 9 0V6.5"></svg:path>`,
})
export class GardenMicrophoneOnFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
