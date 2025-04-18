import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowMoveUpRightIcon],svg[hugeicons-circle-arrow-move-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 16v-.482c0-.897 0-1.345.058-1.72c.32-2.064 1.901-3.683 3.918-4.01c.367-.06 1.148-.06 2.024-.06M13.625 8l1.18 1.236a.72.72 0 0 1 0 .985l-1.18 1.236"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowMoveUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
