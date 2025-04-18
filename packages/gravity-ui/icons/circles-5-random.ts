import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircles5RandomIcon],svg[gravity-ui-circles-5-random-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.069 5.55A2.497 2.497 0 0 0 5 3.5a2.5 2.5 0 1 0-3.931 2.05M2.5 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m11 1.5A2.497 2.497 0 0 1 11 3.5A2.5 2.5 0 1 1 13.5 6m1-2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.069 8.55A2.497 2.497 0 0 0 10 6.5a2.5 2.5 0 1 0-3.931 2.05M7.5 7.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M12 14a2.497 2.497 0 0 1-2.5-2.5A2.5 2.5 0 1 1 12 14m1-2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4.5 16A2.497 2.497 0 0 1 2 13.5A2.5 2.5 0 1 1 4.5 16m1-2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircles5RandomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
