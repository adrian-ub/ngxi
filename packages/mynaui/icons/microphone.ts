import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMicrophoneIcon],svg[mynaui-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 6.429C16 4.535 14.21 3 12 3S8 4.535 8 6.429v5.142C8 13.465 9.79 15 12 15s4-1.535 4-3.429z"></svg:path><svg:path d="M5 11a7 7 0 1 0 14 0m-7 7v3m-4 0h8"></svg:path></svg:g>`,
})
export class MynauiMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
