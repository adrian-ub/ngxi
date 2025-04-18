import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaturn01Icon],svg[hugeicons-saturn-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.636 18.364A9 9 0 1 1 18.364 5.636m1.93 2.864A9 9 0 0 1 8.5 20.294"></svg:path><svg:path d="M15.83 3.822c2.702-1.682 4.89-2.302 5.77-1.424c1.54 1.538-1.509 7.083-6.811 12.386s-10.85 8.356-12.39 6.818c-.875-.874-.268-3.042 1.393-5.725"></svg:path></svg:g>`,
})
export class HugeiconsSaturn01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
