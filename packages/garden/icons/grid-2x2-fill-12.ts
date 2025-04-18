import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrid2x2Fill12Icon],svg[garden-grid-2x2-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="5" height="5" rx="1" ry="1"></svg:rect><svg:rect width="5" height="5" y="7" rx="1" ry="1"></svg:rect><svg:rect width="5" height="5" x="7" rx="1" ry="1"></svg:rect><svg:rect width="5" height="5" x="7" y="7" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenGrid2x2Fill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
