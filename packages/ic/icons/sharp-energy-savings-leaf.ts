import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEnergySavingsLeafIcon],svg[ic-sharp-energy-savings-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61L3 19.59L4.41 21l1.97-1.97A9 9 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3zm-1.5 14l-.5-.5l2.5-3.5l-5-.5l6-5.5l.5.5l-2.5 3.5l5 .5z"></svg:path>`,
})
export class IcSharpEnergySavingsLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
