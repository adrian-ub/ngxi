import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsArrowMainSplitSideIcon],svg[humbleicons-arrow-main-split-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 17H4.603M21 17l-3-3m3 3l-3 3M4.603 17H3m1.603 0a6 6 0 0 0 5.145-2.913l2.504-4.174A6 6 0 0 1 17.397 7H21m0 0l-3 3m3-3l-3-3"></svg:path>`,
})
export class HumbleiconsArrowMainSplitSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
