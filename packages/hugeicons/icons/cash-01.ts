import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCash01Icon],svg[hugeicons-cash-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 21q-.409.305-.894.527c-1.04.473-2.414.473-5.163.473H9.057c-2.749 0-4.123 0-5.163-.473A4.8 4.8 0 0 1 3 21M2 10c0-3.537 0-5.306 1.053-6.487q.253-.284.554-.522C4.862 2 6.741 2 10.5 2h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C22 4.693 22 6.463 22 10s0 5.306-1.053 6.487a4.4 4.4 0 0 1-.555.522C19.138 18 17.26 18 13.5 18h-3c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 15.307 2 13.537 2 10m16.5 0h-.009M5.5 10h-.009"></svg:path><svg:path d="M14.551 10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsCash01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
