import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowDownRightIcon],svg[hugeicons-circle-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M14.773 14.773L9 9m5.773 5.773c-.505.505-2.888.01-3.608 0m3.608 0c.505-.505.01-2.888 0-3.608"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
