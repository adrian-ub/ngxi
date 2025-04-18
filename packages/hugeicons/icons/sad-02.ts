import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSad02Icon],svg[hugeicons-sad-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.5 21.685A10 10 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12q0 .507.05 1"></svg:path><svg:path d="m5.021 14l-2.16 2.083a2.835 2.835 0 0 0 .02 4.088c1.18 1.118 3.08 1.099 4.24-.02a2.82 2.82 0 0 0 0-4.088zm2.988-5.558H8m8 0h-.009M15 16a4.98 4.98 0 0 0-3-1c-.91 0-1.765.244-2.5.67"></svg:path></svg:g>`,
})
export class HugeiconsSad02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
