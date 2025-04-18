import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsIcon],svg[mdi-star-four-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"></svg:path>`,
})
export class MdiStarFourPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
