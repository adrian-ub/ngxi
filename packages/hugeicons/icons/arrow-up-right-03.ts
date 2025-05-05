import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowUpRight03Icon],svg[hugeicons-arrow-up-right-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16.5 7.5L6 18M8 6.188s8.048-.679 9.27.543c1.22 1.221.542 9.269.542 9.269" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowUpRight03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
