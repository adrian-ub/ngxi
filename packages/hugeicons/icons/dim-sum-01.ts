import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDimSum01Icon],svg[hugeicons-dim-sum-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 8.5L22 3M8 17l14-8m-6.447 3.698a7.7 7.7 0 0 0-1.032-1.795c-1.94-2.328-2.5-4.1-2.504-4.903C11.958 7.607 10 8.477 9.012 7c-.987 1.477-2.946.607-3.005-1c-.004.802-.563 2.575-2.504 4.903C2.562 12.13 2 13.598 2 15c0 3.314 3.14 6 7.012 6c3.676 0 6.691-2.42 6.988-5.5m-8.5-5l-.5 1m3.5-1l.5 1" color="currentColor"></svg:path>`,
})
export class HugeiconsDimSum01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
