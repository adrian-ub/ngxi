import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7HouseAltFillIcon],svg[f7-house-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.11 26a2 2 0 0 1-1.183-3.613l23.91-17.534a2 2 0 0 1 2.34-.018L42 13.935V12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6.194l5.884 4.175A2 2 0 0 1 52.726 26H48v22a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V26zM34 30v16h8V30z"></svg:path>`,
})
export class F7HouseAltFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
