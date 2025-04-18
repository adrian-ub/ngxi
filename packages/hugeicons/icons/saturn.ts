import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaturnIcon],svg[hugeicons-saturn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.826 5.376c2.8-1.995 5.087-2.882 5.883-2.085c.797.796-.09 3.083-2.085 5.884m-13.248 5.65c-1.995 2.8-2.882 5.088-2.085 5.884c.796.797 3.083-.09 5.884-2.085m9.45-9.45c-1.133 1.59-2.622 3.345-4.364 5.087s-3.497 3.231-5.086 4.363m9.45-9.45A7.2 7.2 0 0 1 19.2 12a7.2 7.2 0 0 1-10.025 6.624M17.09 6.91A7.2 7.2 0 1 0 6.91 17.09" color="currentColor"></svg:path>`,
})
export class HugeiconsSaturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
