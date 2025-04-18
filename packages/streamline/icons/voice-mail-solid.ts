import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVoiceMailSolidIcon],svg[streamline-voice-mail-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 0a2.946 2.946 0 0 0-2.946 2.946v3.425a2.946 2.946 0 1 0 5.892 0V2.946A2.946 2.946 0 0 0 6.75 0M6 12.008v1.212a.75.75 0 0 0 1.5 0v-1.213a5.25 5.25 0 0 0 5-5.244a.75.75 0 0 0-1.5 0a3.75 3.75 0 0 1-3.75 3.75h-1a3.75 3.75 0 0 1-3.75-3.75a.75.75 0 1 0-1.5 0a5.25 5.25 0 0 0 5 5.245" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVoiceMailSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
