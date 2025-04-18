import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCylinder03Icon],svg[hugeicons-cylinder-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 19c0 1.657-4.477 3-10 3S2 20.657 2 19s4.477-3 10-3s10 1.343 10 3m0-14c0 1.657-4.477 3-10 3S2 6.657 2 5s4.477-3 10-3s10 1.343 10 3m0 0v14M2 5v14" color="currentColor"></svg:path>`,
})
export class HugeiconsCylinder03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
