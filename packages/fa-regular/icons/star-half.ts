import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularStarHalfIcon],svg[fa-regular-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m288 385.3l-124.3 65.4l23.7-138.4l-100.6-98l139-20.2l62.2-126V0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2L47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6z"></svg:path>`,
})
export class FaRegularStarHalfIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
