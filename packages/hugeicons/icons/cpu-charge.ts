import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCpuChargeIcon],svg[hugeicons-cpu-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.5 2v2m5-2v2m-5 16v2m5-2v2m7.5-7.5h-2m-16-5H2m2 5H2m20-5h-2m-7.306-1l-2.091 2.537c-.224.272-.064.663.302.736l2.19.434c.39.077.538.51.266.774L10.767 15.5"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12"></svg:path></svg:g>`,
})
export class HugeiconsCpuChargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
