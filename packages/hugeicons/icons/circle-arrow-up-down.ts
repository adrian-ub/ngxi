import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowUpDownIcon],svg[hugeicons-circle-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9.3 8.5v7m0-7c-.715 0-1.8 1.75-1.8 1.75M9.3 8.5c.704 0 1.8 1.75 1.8 1.75m3.6 5.25v-7m0 7c-.704 0-1.8-1.75-1.8-1.75m1.8 1.75c.704 0 1.8-1.75 1.8-1.75"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
