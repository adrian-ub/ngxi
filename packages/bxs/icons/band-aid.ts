import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBandAidIcon],svg[bxs-band-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.646 3.868l-7.778 7.778a6.007 6.007 0 0 0 0 8.485a5.98 5.98 0 0 0 4.242 1.754a5.98 5.98 0 0 0 4.243-1.754l7.778-7.778a6.007 6.007 0 0 0 0-8.485a6.01 6.01 0 0 0-8.485 0M9 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class BxsBandAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
