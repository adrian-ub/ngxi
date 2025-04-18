import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiagonalScrollPoint01Icon],svg[hugeicons-diagonal-scroll-point-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4 7.883s-4.76.427-5.535-.348C3.69 18.759 4.117 14 4.117 14M14 4.117s4.76-.427 5.535.348c.775.776.348 5.535.348 5.535" color="currentColor"></svg:path>`,
})
export class HugeiconsDiagonalScrollPoint01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
