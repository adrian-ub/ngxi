import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVoiceMailOffIcon],svg[streamline-voice-mail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m8 8a2.49 2.49 0 0 0 1-2V3a2.5 2.5 0 1 0-5 0v1.5m.23 3.04A2.5 2.5 0 0 0 6 8.79m4.42 1.63A4.46 4.46 0 0 0 12 7M2 7a4.49 4.49 0 0 0 4.5 4.5h1q.28.015.56 0M7 11.5v2"></svg:path>`,
})
export class StreamlineVoiceMailOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
