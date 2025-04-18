import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatColorFillIcon],svg[ic-sharp-format-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17.62L17.62 10l-10-10l-1.41 1.41l2.38 2.38L2.38 10zm0-12.41L14.79 10H5.21zM19 17c1.1 0 2-.9 2-2c0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.1.9 2 2 2M2 20h20v4H2z"></svg:path>`,
})
export class IcSharpFormatColorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
