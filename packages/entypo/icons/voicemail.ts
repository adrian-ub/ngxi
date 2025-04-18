import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoVoicemailIcon],svg[entypo-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.4 5.801a4.6 4.6 0 0 0-3.795 7.2H8.394A4.6 4.6 0 1 0 4.6 15h10.8a4.6 4.6 0 0 0 0-9.199M2 10.4a2.6 2.6 0 1 1 5.2 0a2.6 2.6 0 0 1-5.2 0M15.4 13a2.6 2.6 0 1 1-.002-5.2A2.6 2.6 0 0 1 15.4 13"></svg:path>`,
})
export class EntypoVoicemailIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
