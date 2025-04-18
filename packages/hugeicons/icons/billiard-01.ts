import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBilliard01Icon],svg[hugeicons-billiard-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.07 10a7 7 0 1 1 6.05 5.945"></svg:path><svg:path d="M18.868 10c.335-1.31.025-2.982-.868-4M2 19.097l8.225-7.54M4.903 22l7.702-8.401m0 0c0-1.277-.928-2.245-2.38-2.042m2.38 2.042l2.02-2.204a1.43 1.43 0 0 0-2.02-2.02l-2.38 2.182"></svg:path></svg:g>`,
})
export class HugeiconsBilliard01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
