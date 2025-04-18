import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashDuotoneIcon],svg[ph-device-mobile-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m213.92 210.62l-160-176a8 8 0 1 0-11.84 10.76L56 60.69V216a24 24 0 0 0 24 24h96a24 24 0 0 0 23.82-21.11l2.26 2.49a8 8 0 1 0 11.84-10.76M184 216a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V78.29l112 123.2ZM68.7 24a8 8 0 0 1 8-8H176a24 24 0 0 1 24 24v110.83a8 8 0 1 1-16 0V40a8 8 0 0 0-8-8H76.7a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhDeviceMobileSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
