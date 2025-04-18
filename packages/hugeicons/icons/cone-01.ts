import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCone01Icon],svg[hugeicons-cone-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 18c0-2.21-4.03-4-9-4s-9 1.79-9 4s4.03 4 9 4s9-1.79 9-4"></svg:path><svg:path d="m20.5 16.5l-4.344-9.106C14.343 3.798 13.436 2 12 2S9.657 3.798 7.844 7.394L3.5 16.5"></svg:path></svg:g>`,
})
export class HugeiconsCone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
