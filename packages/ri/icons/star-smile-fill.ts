import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStarSmileFillIcon],svg[ri-star-smile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .5l4.226 6.183l7.186 2.109l-4.575 5.93l.216 7.486L12 19.69l-7.054 2.518l.216-7.486l-4.575-5.93l7.187-2.109zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15z"></svg:path>`,
})
export class RiStarSmileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
