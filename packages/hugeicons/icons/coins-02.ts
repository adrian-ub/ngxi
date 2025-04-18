import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoins02Icon],svg[hugeicons-coins-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-.833 2.969A7.397 7.397 0 0 1 3.03 10.833" color="currentColor"></svg:path>`,
})
export class HugeiconsCoins02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
