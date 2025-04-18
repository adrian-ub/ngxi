import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCircleThreeQuarterIcon],svg[bx-circle-three-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2m5.66 15.66A8 8 0 0 1 4.06 13H13V4.06a8 8 0 0 1 4.66 13.6"></svg:path>`,
})
export class BxCircleThreeQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
