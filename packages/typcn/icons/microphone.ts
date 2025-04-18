import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMicrophoneIcon],svg[typcn-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c2.206 0 4-1.795 4-4V6c0-2.206-1.794-4-4-4S8 3.794 8 6v6c0 2.205 1.794 4 4 4m7-4v-2a1 1 0 1 0-2 0v2c0 2.757-2.243 5-5 5s-5-2.243-5-5v-2a1 1 0 1 0-2 0v2c0 3.52 2.613 6.432 6 6.92V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1.08c3.387-.488 6-3.4 6-6.92"></svg:path>`,
})
export class TypcnMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
