import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpFromSquareIcon],svg[gravity-ui-arrow-up-from-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 1.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 3.56v7.69a.75.75 0 0 1-1.5 0V3.56L6.03 4.78a.75.75 0 0 1-1.06-1.06zM4.25 6.5a.75.75 0 0 1 0 1.5H4a1.5 1.5 0 0 0-1.5 1.5V12A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V9.5A1.5 1.5 0 0 0 12 8h-.25a.75.75 0 0 1 0-1.5H12a3 3 0 0 1 3 3V12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.5a3 3 0 0 1 3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpFromSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
