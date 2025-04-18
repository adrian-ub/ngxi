import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrid2x2Fill16Icon],svg[garden-grid-2x2-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="7" height="7" rx="1" ry="1"></svg:rect><svg:rect width="7" height="7" y="9" rx="1" ry="1"></svg:rect><svg:rect width="7" height="7" x="9" rx="1" ry="1"></svg:rect><svg:rect width="7" height="7" x="9" y="9" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenGrid2x2Fill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
