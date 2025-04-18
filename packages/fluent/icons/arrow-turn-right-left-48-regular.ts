import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRightLeft48RegularIcon],svg[fluent-arrow-turn-right-left-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.526 9.407a1.25 1.25 0 0 1 .948-2.313l31.31 12.824c1.864.763 1.864 3.401 0 4.164L11.578 36.456l8.713 4.167a1.25 1.25 0 1 1-1.08 2.255l-11.5-5.5a1.25 1.25 0 0 1-.614-1.608l5-12a1.25 1.25 0 1 1 2.308.961l-3.951 9.483L40.273 22z"></svg:path>`,
})
export class FluentArrowTurnRightLeft48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
