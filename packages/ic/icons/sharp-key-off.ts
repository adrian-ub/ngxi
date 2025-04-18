import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpKeyOffIcon],svg[ic-sharp-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.91 14.09L17 14l2 2l4-4.04L21 10h-8.17zM3.98 6.81A6.01 6.01 0 0 0 1 12c0 3.31 2.69 6 6 6c2.21 0 4.15-1.2 5.18-2.99l7.59 7.59l1.41-1.41L2.81 2.81L1.39 4.22zm5.93 5.93A3.015 3.015 0 0 1 7 15c-1.65 0-3-1.35-3-3c0-1.4.97-2.58 2.26-2.91z"></svg:path>`,
})
export class IcSharpKeyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
