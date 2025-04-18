import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsMicrophoneIcon],svg[humbleicons-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 10.5A5.5 5.5 0 0 1 12 16m0 0a5.5 5.5 0 0 1-5.5-5.5M12 16v4m-4 0h4m0 0h4m-4-7a2.5 2.5 0 0 1-2.5-2.5v-4a2.5 2.5 0 0 1 5 0v4A2.5 2.5 0 0 1 12 13"></svg:path>`,
})
export class HumbleiconsMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
