import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowDown05Icon],svg[hugeicons-arrow-down-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 19.999h12M11.996 4.002v7.528m2.51 3.06l1.444-1.952a.696.696 0 0 0-.566-1.108h-6.71a.696.696 0 0 0-.573 1.1l1.402 1.96l1.941 2.366a.706.706 0 0 0 1.087.005z" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowDown05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
