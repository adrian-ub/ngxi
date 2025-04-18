import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowDownDoubleIcon],svg[hugeicons-circle-arrow-down-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M15 12.915S12.79 15.5 12 15.5s-3-2.585-3-2.585M15 8.5s-2.21 2.585-3 2.585S9 8.5 9 8.5"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowDownDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
