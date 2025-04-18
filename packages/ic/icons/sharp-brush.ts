import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBrushIcon],svg[ic-sharp-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14c-1.66 0-3 1.34-3 3c0 1.31-1.16 2-2 2c.92 1.22 2.49 2 4 2c2.21 0 4-1.79 4-4c0-1.66-1.34-3-3-3m14.41-8.66l-2.75-2.75L9 12.25L11.75 15z"></svg:path>`,
})
export class IcSharpBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
