import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineExplicitIcon],svg[ic-baseline-explicit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4 6h-4v2h4v2h-4v2h4v2H9V7h6z"></svg:path>`,
})
export class IcBaselineExplicitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
