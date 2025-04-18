import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoin04Icon],svg[hugeicons-bitcoin-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.945 18.167v-5.334m1.562 0V11.5m0 8v-1.333M13.945 15.5h3.125m0 0c.518 0 .937.448.937 1v.667c0 .552-.42 1-.937 1h-4.063M17.07 15.5c.518 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1h-4.063"></svg:path><svg:path d="M15.503 9a6.5 6.5 0 0 0-6.498 6.5A6.499 6.499 0 1 0 22 15.5c0-3.59-2.909-6.5-6.498-6.5M8.005 6c3.313 0 5.998-.895 5.998-2s-2.685-2-5.998-2c-3.312 0-5.998.895-5.998 2s2.686 2 5.998 2"></svg:path><svg:path d="M2 4v8.043c0 .704 1.18 1.59 4.132 1.957M2.107 8.548c1.205 1.062 3.354 1.512 5.65 1.512m6.239-5.939v2.015"></svg:path></svg:g>`,
})
export class HugeiconsBitcoin04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
