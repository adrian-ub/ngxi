import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrip16Icon],svg[garden-grip-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="2" height="2" x="5" y="1" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="9" y="1" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="5" y="5" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="9" y="5" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="5" y="9" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="9" y="9" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="5" y="13" rx=".5" ry=".5"></svg:rect><svg:rect width="2" height="2" x="9" y="13" rx=".5" ry=".5"></svg:rect></svg:g>`,
})
export class GardenGrip16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
