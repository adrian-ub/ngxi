import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowRightDoubleIcon],svg[hugeicons-circle-arrow-right-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12.915 15s2.585-2.21 2.585-3s-2.585-3-2.585-3M8.5 15s2.585-2.21 2.585-3S8.5 9 8.5 9"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowRightDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
