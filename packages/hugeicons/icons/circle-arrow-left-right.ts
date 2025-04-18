import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowLeftRightIcon],svg[hugeicons-circle-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8.5 9.3h7m-7 0c0-.704 1.75-1.8 1.75-1.8M8.5 9.3c0 .704 1.75 1.8 1.75 1.8m5.25 3.6h-7m7 0c0-.704-1.75-1.8-1.75-1.8m1.75 1.8c0 .704-1.75 1.8-1.75 1.8"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
