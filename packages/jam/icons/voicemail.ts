import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamVoicemailIcon],svg[jam-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.743 9h4.514A5.5 5.5 0 1 1 19 10.978V11H6v-.022A5.5 5.5 0 1 1 9.743 9M5.5 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m13 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class JamVoicemailIcon {
  readonly viewBox = input("0 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
