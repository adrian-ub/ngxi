import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStructure04Icon],svg[hugeicons-structure-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-2.482.518-3 3-3h2c2.482 0 3 .518 3 3s-.518 3-3 3H5c-2.482 0-3-.518-3-3m12-5c0-2.482.518-3 3-3h2c2.482 0 3 .518 3 3s-.518 3-3 3h-2c-2.482 0-3-.518-3-3m0 10c0-2.482.518-3 3-3h2c2.482 0 3 .518 3 3s-.518 3-3 3h-2c-2.482 0-3-.518-3-3m0-10l-3 5l3 5" color="currentColor"></svg:path>`,
})
export class HugeiconsStructure04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
