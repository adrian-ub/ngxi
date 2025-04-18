import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsArrowSplitIcon],svg[humbleicons-arrow-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h4.597a5 5 0 0 1 3.904 1.877l.998 1.246A5 5 0 0 0 16.403 17H21m0 0l-3-3m3 3l-3 3m3-13h-5.078A4 4 0 0 0 12.8 8.501L11.201 10.5A4 4 0 0 1 8.078 12H6m15-5l-3-3m3 3l-3 3"></svg:path>`,
})
export class HumbleiconsArrowSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
