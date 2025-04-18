import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStarHalfFillIcon],svg[ri-star-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.968l4.247 2.377l-.948-4.773l3.573-3.305l-4.833-.573l-2.038-4.419zm0 2.292l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"></svg:path>`,
})
export class RiStarHalfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
