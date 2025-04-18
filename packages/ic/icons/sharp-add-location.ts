import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAddLocationIcon],svg[ic-sharp-add-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6h-2v3H8v2h3v3h2v-3h3V9h-3zm-1-4c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2"></svg:path>`,
})
export class IcSharpAddLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
