import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDataArrayIcon],svg[ic-sharp-data-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"></svg:path>`,
})
export class IcSharpDataArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
