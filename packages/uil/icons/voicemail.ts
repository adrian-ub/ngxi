import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilVoicemailIcon],svg[uil-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a4 4 0 0 0-4 4a3.9 3.9 0 0 0 .56 2H9.44a3.9 3.9 0 0 0 .56-2a4 4 0 1 0-4 4h12a4 4 0 0 0 0-8M6 14a2 2 0 1 1 2-2a2 2 0 0 1-2 2m12 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class UilVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
