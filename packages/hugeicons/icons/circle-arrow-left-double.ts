import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowLeftDoubleIcon],svg[hugeicons-circle-arrow-left-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M11.085 15S8.5 12.79 8.5 12s2.585-3 2.585-3m4.415 6s-2.585-2.21-2.585-3S15.5 9 15.5 9"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowLeftDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
