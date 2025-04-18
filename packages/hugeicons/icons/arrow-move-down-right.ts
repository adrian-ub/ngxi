import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowMoveDownRightIcon],svg[hugeicons-arrow-move-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 3v2.077c0 2 0 3.001.145 3.838c.8 4.609 4.762 8.223 9.812 8.952C14.875 18 16.807 18 19 18"></svg:path><svg:path d="M17 21c.607-.59 3-2.16 3-3s-2.393-2.41-3-3"></svg:path></svg:g>`,
})
export class HugeiconsArrowMoveDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
