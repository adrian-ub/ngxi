import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPot02Icon],svg[hugeicons-pot-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10h20M4 10l.504 5.543c.236 2.592.353 3.887 1.213 4.672c.859.785 2.16.785 4.762.785h3.042c2.602 0 3.903 0 4.762-.785c.86-.785.977-2.08 1.213-4.672L20 10M4 8l5-1.35m0 0l6-1.621m-6 1.62l.206-1.737a1.56 1.56 0 0 1 1.14-1.327l1.969-.532a1.55 1.55 0 0 1 1.645.575L15 5.029m0 0l5-1.35" color="currentColor"></svg:path>`,
})
export class HugeiconsPot02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
