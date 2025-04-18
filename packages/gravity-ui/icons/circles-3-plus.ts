import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircles3PlusIcon],svg[gravity-ui-circles-3-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.047 7.125A3 3 0 1 0 4.5 1.5a3 3 0 0 0-1.453 5.625M4.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-1.453 8.125A3 3 0 1 0 4.5 8.5a3 3 0 0 0-1.453 5.625M4.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7 1.5a3 3 0 1 1 0-6a3 3 0 1 1 0 6m1.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-.75-9.25a.75.75 0 0 0-1.5 0v1.501h-1.5a.75.75 0 1 0 0 1.5h1.501v1.502a.75.75 0 0 0 1.5 0V5.25h1.501a.75.75 0 0 0 0-1.5h-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircles3PlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
