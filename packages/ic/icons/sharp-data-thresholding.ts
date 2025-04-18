import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDataThresholdingIcon],svg[ic-sharp-data-thresholding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM10.67 8.17l2 2l3.67-3.67l1.41 1.41L12.67 13l-2-2l-3 3l-1.41-1.41zM5 16h1.72L5 17.72zm.84 3l3-3h1.83l-3 3zm3.96 0l3-3h1.62l-3 3zm3.73 0l3-3h1.62l-3 3zM19 19h-1.73L19 17.27z"></svg:path>`,
})
export class IcSharpDataThresholdingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
