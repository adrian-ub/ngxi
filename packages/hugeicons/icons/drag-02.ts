import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrag02Icon],svg[hugeicons-drag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.492 16.77l.248-.242c.561-.55.881-1.302.889-2.09l.05-5.144c.006-.697.231-1.434.864-1.723c.957-.438 2.14-.19 2.352 1.855l.329 1.729l5.579-6.7c1.167-1.102 3.24.29 2.336 2.016l-3.281 3.95c1.28.86 6.004 5.75 2.178 8.24c-.551.48-1.858 1.177-2.998 1.54c-1.087.346-1.769 1.53-2.103 1.799M9.484 3.514c0 .836.651 1.514 1.455 1.514c.803 0 1.455-.678 1.455-1.514S11.742 2 10.939 2c-.804 0-1.455.678-1.455 1.514m0 0H8.84l-.77.072M3.99 8.943c.837-.014 1.474.642 1.487 1.453c.013.812-.61 1.51-1.446 1.524a1.52 1.52 0 0 1-1.533-1.483c-.013-.811.655-1.48 1.492-1.494m0 0l.09-1.333m1.694-2.96l-.328.307l-.29.313" color="currentColor"></svg:path>`,
})
export class HugeiconsDrag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
