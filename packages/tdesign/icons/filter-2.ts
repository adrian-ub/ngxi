import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilter2Icon],svg[tdesign-filter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.888 2.27l-1.57.78l1.57.782l.78 1.569l.781-1.57l1.57-.78l-1.57-.781l-.78-1.569zm-12.93-.755l1.098 2.204l2.204 1.097l-2.204 1.097l-1.097 2.204l-1.097-2.204l-2.204-1.097l2.204-1.097zm9.28 1.887l5.15 5.149L7.297 23.64L2.15 18.491zm-2.004 4.833l2.32 2.32l2.005-2.004l-2.32-2.32zm.906 3.735l-2.32-2.32l-8.842 8.841l2.32 2.32z"></svg:path>`,
})
export class TdesignFilter2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
