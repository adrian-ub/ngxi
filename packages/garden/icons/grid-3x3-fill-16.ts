import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrid3x3Fill16Icon],svg[garden-grid-3x3-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="4" height="4" x="1" y="1" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="1" y="6" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="1" y="11" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="6" y="11" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="6" y="6" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="11" y="6" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="11" y="11" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="6" y="1" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="11" y="1" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenGrid3x3Fill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
