import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVoicemailDuotoneIcon],svg[ph-voicemail-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48m96-48a48 48 0 1 0 48 48a48 48 0 0 0-48-48" opacity=".2"></svg:path><svg:path d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M16 128a40 40 0 1 1 40 40a40 40 0 0 1-40-40m184 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhVoicemailDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
