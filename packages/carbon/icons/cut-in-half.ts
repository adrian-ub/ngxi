import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCutInHalfIcon],svg[carbon-cut-in-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 4H4a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2zM4 6h12v20H4z" fill="currentColor"></svg:path>`,
})
export class CarbonCutInHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
