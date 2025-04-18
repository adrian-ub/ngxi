import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond24RegularIcon],svg[fluent-diamond-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.952 14.299a3.25 3.25 0 0 1 0-4.597l6.75-6.75a3.25 3.25 0 0 1 4.597 0l6.75 6.75a3.25 3.25 0 0 1 0 4.597l-6.75 6.75a3.25 3.25 0 0 1-4.597 0zm1.06-3.536a1.75 1.75 0 0 0 0 2.475l6.751 6.75a1.75 1.75 0 0 0 2.475 0l6.75-6.75a1.75 1.75 0 0 0 0-2.475l-6.75-6.75a1.75 1.75 0 0 0-2.475 0z"></svg:path>`,
})
export class FluentDiamond24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
