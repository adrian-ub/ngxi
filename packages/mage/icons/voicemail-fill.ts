import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageVoicemailFillIcon],svg[mage-voicemail-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.985 12a4.65 4.65 0 0 1-4.64 4.65H6.655a4.65 4.65 0 1 1 3.41-1.5h3.88a4.64 4.64 0 1 1 8.06-3.15z"></svg:path>`,
})
export class MageVoicemailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
