import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircles4DiamondIcon],svg[gravity-ui-circles-4-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiCircles4Diamond0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M10.502 4.392a2.75 2.75 0 1 0-5.004-2.285a2.75 2.75 0 0 0 5.004 2.285m-4.75 2.466a2.76 2.76 0 0 0-1.36-1.36a2.75 2.75 0 1 0 1.36 1.36m1.106 3.39a2.76 2.76 0 0 0-1.36 1.36a2.75 2.75 0 1 0 1.36-1.36m3.39-1.106a2.75 2.75 0 0 0 1.36 1.36a2.75 2.75 0 1 0-1.36-1.36M8 2a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 8 2m6 6a1.25 1.25 0 1 0-2.5 0A1.25 1.25 0 0 0 14 8m-6 3.5A1.25 1.25 0 1 0 8 14a1.25 1.25 0 0 0 0-2.5M4.5 8A1.25 1.25 0 1 0 2 8a1.25 1.25 0 0 0 2.5 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiCircles4Diamond0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiCircles4DiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
