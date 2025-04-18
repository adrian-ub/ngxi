import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherVoicemailIcon],svg[feather-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="5.5" cy="11.5" r="4.5"></svg:circle><svg:circle cx="18.5" cy="11.5" r="4.5"></svg:circle><svg:path d="M5.5 16h13"></svg:path></svg:g>`,
})
export class FeatherVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
