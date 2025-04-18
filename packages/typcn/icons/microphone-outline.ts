import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMicrophoneOutlineIcon],svg[typcn-microphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c-2.206 0-4-1.795-4-4V6c0-2.205 1.794-4 4-4s4 1.795 4 4v6c0 2.205-1.794 4-4 4m0-12c-1.103 0-2 .896-2 2v6c0 1.104.897 2 2 2s2-.896 2-2V6c0-1.104-.897-2-2-2m7 8v-2a1 1 0 1 0-2 0v2c0 2.757-2.243 5-5 5s-5-2.243-5-5v-2a1 1 0 1 0-2 0v2c0 3.52 2.613 6.432 6 6.92V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1.08c3.387-.488 6-3.4 6-6.92"></svg:path>`,
})
export class TypcnMicrophoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
