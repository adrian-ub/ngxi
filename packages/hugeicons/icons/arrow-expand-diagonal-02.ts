import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowExpandDiagonal02Icon],svg[hugeicons-arrow-expand-diagonal-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 8l-8 8M7 3.237c-.75-.011-3.236-.527-3.763 0s-.011 3.012 0 3.763m17.526 10c.011.75.527 3.236 0 3.763s-3.012.011-3.763 0M9.003 9.007L3.617 3.621m16.757 16.753l-5.386-5.386" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowExpandDiagonal02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
