import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerDuotoneIcon],svg[ph-device-mobile-speaker-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8ZM168 56a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhDeviceMobileSpeakerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
