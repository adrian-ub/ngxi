import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineRectangleIcon],svg[ic-outline-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h20V4zm18 14H4V6h16z"></svg:path>`,
})
export class IcOutlineRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
