import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiThunderboltFillIcon],svg[gravity-ui-thunderbolt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.61 6.914l-7.632 8.08a1.614 1.614 0 0 1-2.69-1.66L5.5 10H2.677A1.677 1.677 0 0 1 1.12 7.7l2.323-5.807A2.22 2.22 0 0 1 5.5.5h4c.968 0 1.637.967 1.298 1.873L10 4.5h3.569a1.431 1.431 0 0 1 1.04 2.414"></svg:path>`,
})
export class GravityUiThunderboltFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
