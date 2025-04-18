import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsBandAidIcon],svg[bx-bxs-band-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11.646 3.868l-7.778 7.778a6.007 6.007 0 0 0 0 8.485a5.984 5.984 0 0 0 4.242 1.754a5.984 5.984 0 0 0 4.243-1.754l7.778-7.778a6.007 6.007 0 0 0 0-8.485a6.008 6.008 0 0 0-8.485 0zM9 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-6a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2z" fill="currentColor"></svg:path>`,
})
export class BxBxsBandAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
