import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUturnCwRightIcon],svg[gravity-ui-arrow-uturn-cw-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.53 4.72a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L11.19 6H7a3.25 3.25 0 0 0 0 6.5h1A.75.75 0 0 1 8 14H7a4.75 4.75 0 1 1 0-9.5h4.19L9.47 2.78a.75.75 0 0 1 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUturnCwRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
