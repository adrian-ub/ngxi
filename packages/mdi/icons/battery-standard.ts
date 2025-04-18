import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryStandardIcon],svg[mdi-battery-standard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 11.998H8v-6h8m.666-2H15v-2H9v2H7.332C6.596 3.998 6 4.595 6 5.331v15.334c0 .736.597 1.333 1.333 1.333h9.334c.737 0 1.333-.597 1.333-1.333V5.331c0-.736-.596-1.333-1.333-1.333z" fill="currentColor"></svg:path>`,
})
export class MdiBatteryStandardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
