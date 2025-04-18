import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVoiceMailIcon],svg[streamline-voice-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 6.5a2.5 2.5 0 1 1-5 0V3a2.5 2.5 0 1 1 5 0z"></svg:path><svg:path d="M12 7a4.49 4.49 0 0 1-4.5 4.5h-1A4.49 4.49 0 0 1 2 7m5 4.5v2"></svg:path></svg:g>`,
})
export class StreamlineVoiceMailIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
