import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollar01Icon],svg[hugeicons-dollar-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.958 8.389C17.958 6.24 15.291 4.5 12 4.5c-3.29 0-5.958 1.741-5.958 3.889S7.667 11.722 12 11.722s6.5 1.111 6.5 3.89c0 2.777-2.91 3.888-6.5 3.888s-6.5-1.741-6.5-3.889m7-13.111v1.71m0 17.29v-1.71" color="currentColor"></svg:path>`,
})
export class HugeiconsDollar01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
