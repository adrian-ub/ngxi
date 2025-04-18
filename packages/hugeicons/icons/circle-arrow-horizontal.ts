import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowHorizontalIcon],svg[hugeicons-circle-arrow-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M17 12H7m10 0c0-.56-1.396-1.607-1.75-2M17 12c0 .56-1.396 1.607-1.75 2M7 12c0-.56 1.396-1.607 1.75-2M7 12c0 .56 1.396 1.607 1.75 2"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
