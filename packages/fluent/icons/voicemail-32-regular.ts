import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVoicemail32RegularIcon],svg[fluent-voicemail-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16a4 4 0 1 1-4-4h10a4 4 0 1 1-3.465 2h-3.07c.34.588.535 1.271.535 2m-4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-2a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5.25 4A3.25 3.25 0 0 0 2 7.25v17.5A3.25 3.25 0 0 0 5.25 28h21.5A3.25 3.25 0 0 0 30 24.75V7.25A3.25 3.25 0 0 0 26.75 4zM4 7.25C4 6.56 4.56 6 5.25 6h21.5c.69 0 1.25.56 1.25 1.25v17.5c0 .69-.56 1.25-1.25 1.25H5.25C4.56 26 4 25.44 4 24.75z"></svg:path>`,
})
export class FluentVoicemail32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
