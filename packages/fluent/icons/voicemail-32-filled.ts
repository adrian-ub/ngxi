import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVoicemail32FilledIcon],svg[fluent-voicemail-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-2a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5.25 4A3.25 3.25 0 0 0 2 7.25v17.5A3.25 3.25 0 0 0 5.25 28h21.5A3.25 3.25 0 0 0 30 24.75V7.25A3.25 3.25 0 0 0 26.75 4zM15 16a4 4 0 1 1-4-4h10a4 4 0 1 1-3.465 2h-3.07c.34.588.535 1.271.535 2"></svg:path>`,
})
export class FluentVoicemail32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
