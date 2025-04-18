import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunCloud01Icon],svg[hugeicons-sun-cloud-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.478 11h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 11q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 11a5.5 5.5 0 0 1-1.235 3M6.52 10.023Q6.757 10 7 10c1.126 0 2.165.372 3 1"></svg:path><svg:path d="M9 5.655A3.84 3.84 0 0 0 5.844 4A3.85 3.85 0 0 0 2 7.857C2 9.154 2.638 10.3 3.616 11"></svg:path></svg:g>`,
})
export class HugeiconsSunCloud01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
