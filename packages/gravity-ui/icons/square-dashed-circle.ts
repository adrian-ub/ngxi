import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareDashedCircleIcon],svg[gravity-ui-square-dashed-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h1.75a.75.75 0 0 0 0-1.5H4.5a3 3 0 0 0-3 3v1.75a.75.75 0 0 0 1.5 0zm6.75-3a.75.75 0 0 0 0 1.5h1.75A1.5 1.5 0 0 1 13 4.5v1.75a.75.75 0 0 0 1.5 0V4.5a3 3 0 0 0-3-3zM3 9.75a.75.75 0 0 0-1.5 0v1.75a3 3 0 0 0 3 3h1.75a.75.75 0 0 0 0-1.5H4.5A1.5 1.5 0 0 1 3 11.5zm11.5 0a.75.75 0 0 0-1.5 0v1.75a1.5 1.5 0 0 1-1.5 1.5H9.75a.75.75 0 0 0 0 1.5h1.75a3 3 0 0 0 3-3zM10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareDashedCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
