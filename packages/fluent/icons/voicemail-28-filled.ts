import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVoicemail28FilledIcon],svg[fluent-voicemail-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 14a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-9 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0M4.75 4A2.75 2.75 0 0 0 2 6.75v14.5A2.75 2.75 0 0 0 4.75 24h18.5A2.75 2.75 0 0 0 26 21.25V6.75A2.75 2.75 0 0 0 23.25 4zm7.623 8A3.5 3.5 0 1 1 9.5 10.5h9a3.5 3.5 0 1 1-2.873 1.5z"></svg:path>`,
})
export class FluentVoicemail28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
