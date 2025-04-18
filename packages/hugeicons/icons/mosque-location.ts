import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMosqueLocationIcon],svg[hugeicons-mosque-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.007 7.5a2.5 2.5 0 1 0-2.501 3.948m.444 6.547c-.25 0-.497-.067-.716-.195c-2.987-1.915-6.232-4.672-6.232-8.66C2.002 5.225 5.19 2 8.95 2c1.968 0 3.778.883 5.058 2.286M12.62 15.55c-1.36-1.655-1.593-3.318.354-5.336c2.044-1.825 3.222-2.687 3.535-3.207c.314.52 1.51 1.382 3.555 3.207c1.853 1.653 1.737 3.68.376 5.336m-7.82 0h-.522m.522 0h7.82m0 0h.46m-9.873 0h1.07m0 0v5.543c.04.667 0 .979 1.21.891h3.184m4.41-6.434h1.098m-1.098 0v5.644c.116.907-.605.748-1.067.79h-3.343m0 0l.035-2.133" color="currentColor"></svg:path>`,
})
export class HugeiconsMosqueLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
