import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVoicemailIcon],svg[carbon-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10a6 6 0 0 0-4.46 10h-7.08A6 6 0 1 0 8 22h16a6 6 0 0 0 0-12M4 16a4 4 0 1 1 4 4a4 4 0 0 1-4-4m20 4a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></svg:path>`,
})
export class CarbonVoicemailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
