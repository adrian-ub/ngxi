import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarThreePointsOutlineIcon],svg[mdi-star-three-points-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9.5l1.2 4l2.8 3l-4-.9l-4.1.9l2.8-3zm0-6.9l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5z"></svg:path>`,
})
export class MdiStarThreePointsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
