import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrid3x3Fill12Icon],svg[garden-grid-3x3-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="2" height="2" x="2" y="2" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="5" y="2" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="8" y="2" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="8" y="5" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="5" y="5" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="2" y="5" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="2" y="8" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="5" y="8" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="8" y="8" rx=".5" ry=".5"></svg:rect></svg:g>`,
})
export class GardenGrid3x3Fill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
