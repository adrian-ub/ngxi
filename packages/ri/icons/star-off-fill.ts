import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStarOffFillIcon],svg[ri-star-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.413 8.792l-5.392 4.986L9.71 5.467L12 .5l3.386 7.34zm-4.79 11.244l2.57 2.57l1.414-1.414L2.808 1.393L1.394 2.808l5.264 5.264l-6.07.72l5.934 5.488l-1.575 7.928l7.054-3.948l7.053 3.948z"></svg:path>`,
})
export class RiStarOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
