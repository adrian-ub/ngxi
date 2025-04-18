import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCircleThreeQuarterIcon],svg[bxs-circle-three-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2"></svg:path>`,
})
export class BxsCircleThreeQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
