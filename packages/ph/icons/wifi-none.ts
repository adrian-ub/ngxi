import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneIcon],svg[ph-wifi-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhWifiNoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
