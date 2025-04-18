import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarThreePointsIcon],svg[mdi-star-three-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5z"></svg:path>`,
})
export class MdiStarThreePointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
