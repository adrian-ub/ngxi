import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDimSum02Icon],svg[hugeicons-dim-sum-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.5 11.5l-.5 1m3.5-1l.5 1m5.5-6l.5 1M9 22c3.866 0 7-2.686 7-6c0-1.402-.56-2.87-1.5-4.097C12.562 9.575 12.004 7.803 12 7c-.059 1.607-2.015 2.477-3 1c-.985 1.477-2.941.607-3-1c-.003.802-.562 2.575-2.5 4.903C2.56 13.13 2 14.598 2 16c0 3.314 3.134 6 7 6m2-16.984C11.834 3.623 12.11 2.57 12.112 2c.059 1.616 1.993 2.49 2.967 1.005c.973 1.486 2.908.611 2.966-1.005c.003.807.556 2.589 2.472 4.93C21.446 8.163 22 9.64 22 11.048c0 2.05-1.173 3.86-2.966 4.951" color="currentColor"></svg:path>`,
})
export class HugeiconsDimSum02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
