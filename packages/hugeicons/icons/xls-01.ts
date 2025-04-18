import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXls01Icon],svg[hugeicons-xls-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m6.682 14H19.07c-.444 0-.666 0-.841.076c-.589.256-.589.853-.589 1.402v.044c0 .55 0 1.146.589 1.402c.175.076.397.076.841.076s.666 0 .841.076c.59.256.59.853.589 1.402v.044c0 .55 0 1.146-.588 1.402c-.176.076-.398.076-.842.076h-1.21M3.5 16l2 3m0 0l2 3m-2-3l2-3m-2 3l-2 3M14 22h-1c-.943 0-1.414 0-1.707-.293S11 20.943 11 20v-4"></svg:path></svg:g>`,
})
export class HugeiconsXls01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
