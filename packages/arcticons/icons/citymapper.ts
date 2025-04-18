import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCitymapperIcon],svg[arcticons-citymapper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.62 20.84A3.12 3.12 0 1 1 4.5 24a3.12 3.12 0 0 1 3.12-3.12Zm32.76 0A3.12 3.12 0 1 1 37.26 24a3.12 3.12 0 0 1 3.12-3.12Zm-26.74 3.14h20.72m-6.31-6.3l6.31 6.3m-6.31 6.3l6.31-6.3"></svg:path>`,
})
export class ArcticonsCitymapperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
