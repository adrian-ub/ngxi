import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCheckEmptyIcon],svg[el-check-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1200h1200V0zm196.875 196.875h806.25v806.25h-806.25z"></svg:path>`,
})
export class ElCheckEmptyIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
