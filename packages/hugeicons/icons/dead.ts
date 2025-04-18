import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeadIcon],svg[hugeicons-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 16h6m-5-5L8.5 9.5m0 0L7 8m1.5 1.5L7 11m1.5-1.5L10 8m7 3l-1.5-1.5m0 0L14 8m1.5 1.5L14 11m1.5-1.5L17 8"></svg:path></svg:g>`,
})
export class HugeiconsDeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
