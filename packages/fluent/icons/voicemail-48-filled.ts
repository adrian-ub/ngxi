import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVoicemail48FilledIcon],svg[fluent-voicemail-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 24a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M32 20.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M8.25 8A4.25 4.25 0 0 0 4 12.25v23.5A4.25 4.25 0 0 0 8.25 40h31.5A4.25 4.25 0 0 0 44 35.75v-23.5A4.25 4.25 0 0 0 39.75 8zm12.624 12.5A6 6 0 1 1 16 18h16a6 6 0 1 1-4.874 2.5z"></svg:path>`,
})
export class FluentVoicemail48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
