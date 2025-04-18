import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircles4SquareIcon],svg[gravity-ui-circles-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.047 7.125A3 3 0 1 0 4.5 1.5a3 3 0 0 0-1.453 5.625M4.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5.547 1.125A3 3 0 1 0 11.5 1.5a3 3 0 0 0-1.453 5.625M11.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-7 8.5a3 3 0 1 1 0-6a3 3 0 0 1 0 6m1.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4.047 2.625A3 3 0 1 0 11.5 8.5a3 3 0 0 0-1.453 5.625M11.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircles4SquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
