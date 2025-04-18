import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVoicemail20RegularIcon],svg[fluent-voicemail-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.732 9A2 2 0 1 1 7 8h6a2 2 0 1 1-1.732 1zM6 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0m7-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentVoicemail20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
