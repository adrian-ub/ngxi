import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJsx02Icon],svg[hugeicons-jsx-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-6 14v4.25a1.75 1.75 0 0 1-3.5 0V20m9-4h-1.166c-.466 0-.699 0-.882.076c-.626.26-.618.869-.618 1.424s-.008 1.165.618 1.424c.183.076.416.076.882.076s.7 0 .883.076c.617.256.617.853.617 1.402v.044c0 .55 0 1.146-.617 1.402c-.184.076-.417.076-.883.076h-1.27M16 16l2 3m0 0l2 3m-2-3l2-3m-2 3l-2 3"></svg:path></svg:g>`,
})
export class HugeiconsJsx02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
