import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBabyBoyDressIcon],svg[hugeicons-baby-boy-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.947 9.003s-2.264 2.249-2.93 1.974c-.94-.389-1.346-4.157-.707-4.732l2.457-2.212C5.9 3.01 5.93 3 7.439 3h1.518C9.183 4.36 10.496 5.992 12 5.992S14.816 4.36 15.043 3h1.518c1.508 0 1.538.011 2.672 1.033l2.457 2.212c.64.575.233 4.343-.707 4.732c-.666.275-2.934-1.974-2.934-1.974"></svg:path><svg:path d="M6 8v10.527c0 .705.12 1.082.755 1.423c2.613 1.4 7.877 1.4 10.49 0c.635-.34.755-.718.755-1.423V8"></svg:path><svg:path d="M6 10c2 2.667 10 2.667 12 0"></svg:path></svg:g>`,
})
export class HugeiconsBabyBoyDressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
