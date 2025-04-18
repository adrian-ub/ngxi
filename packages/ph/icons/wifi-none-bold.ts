import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneBoldIcon],svg[ph-wifi-none-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhWifiNoneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
