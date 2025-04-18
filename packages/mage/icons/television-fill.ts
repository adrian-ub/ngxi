import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionFillIcon],svg[mage-television-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6.315v7.87a3.76 3.76 0 0 1-2.315 3.466a3.7 3.7 0 0 1-1.435.284h-5.5v2h2.72a.75.75 0 1 1 0 1.5H8.53a.75.75 0 1 1 0-1.5h2.72v-2h-5.5a3.72 3.72 0 0 1-2.65-1.1a3.76 3.76 0 0 1-1.1-2.65v-7.87a3.76 3.76 0 0 1 3.75-3.75h12.5A3.76 3.76 0 0 1 22 6.315"></svg:path>`,
})
export class MageTelevisionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
