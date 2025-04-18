import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpToLineIcon],svg[gravity-ui-arrow-up-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 4.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 6.56v7.69a.75.75 0 0 1-1.5 0V6.56L6.03 7.78a.75.75 0 0 1-1.06-1.06zm6.78-1.72a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
