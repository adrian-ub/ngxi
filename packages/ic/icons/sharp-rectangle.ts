import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRectangleIcon],svg[ic-sharp-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v16H2z"></svg:path>`,
})
export class IcSharpRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
