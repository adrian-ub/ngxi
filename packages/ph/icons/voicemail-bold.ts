import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVoicemailBoldIcon],svg[ph-voicemail-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 68a60 60 0 0 0-48 96h-40a60 60 0 1 0-48 24h136a60 60 0 0 0 0-120M24 128a36 36 0 1 1 36 36a36 36 0 0 1-36-36m172 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhVoicemailBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
