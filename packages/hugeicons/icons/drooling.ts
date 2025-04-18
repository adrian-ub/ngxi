import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDroolingIcon],svg[hugeicons-drooling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 8.5H8.707c-.453 0-.887.18-1.207.5m6.5-.5h1.293c.453 0 .887.18 1.207.5"></svg:path><svg:path d="M16 21.168A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2.307 6.389"></svg:path><svg:path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2"></svg:path><svg:path d="M15 16c1.944.478 5.574 1.48 4.923 4.538c-.336 1.512-2.094 1.792-3.048 1.112c-2.298-1.638 0-3.25-1.875-5.65"></svg:path></svg:g>`,
})
export class HugeiconsDroolingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
