import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMagicSelection01Icon],svg[hugeicons-cursor-magic-selection-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.793 20.59c-2.471.17-4.92-11.354-3.238-13.035c1.68-1.681 13.205.765 13.035 3.236c-.118 1.618-2.857 2.258-2.777 3.697c.023.42.556.805 1.62 1.573c.74.533 1.493 1.051 2.22 1.602a.9.9 0 0 1 .32.938a4.57 4.57 0 0 1-3.372 3.372a.9.9 0 0 1-.937-.32c-.55-.727-1.069-1.481-1.603-2.22c-.767-1.065-1.151-1.597-1.572-1.62c-1.438-.08-2.078 2.659-3.696 2.776M9.03 3.5V2M5 5L4 4m-.5 5.03H2M5 13l-1 1M14 4l-1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorMagicSelection01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
