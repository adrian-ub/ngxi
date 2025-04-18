import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneThinIcon],svg[ph-wifi-none-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWifiNoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
