import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrip12Icon],svg[garden-grip-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="2" height="2" x="3" y="1" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="7" y="1" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="3" y="5" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="7" y="5" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="3" y="9" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="7" y="9" rx=".5" ry=".5"></svg:rect></svg:g>`,
})
export class GardenGrip12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
