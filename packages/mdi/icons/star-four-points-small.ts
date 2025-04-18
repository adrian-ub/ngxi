import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsSmallIcon],svg[mdi-star-four-points-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.74 10.75L12 8l1.25 2.75L16 12l-2.75 1.26L12 16l-1.26-2.74L8 12z"></svg:path>`,
})
export class MdiStarFourPointsSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
