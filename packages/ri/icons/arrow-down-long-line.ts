import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDownLongLineIcon],svg[ri-arrow-down-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v16.172l-3.95-3.95l-1.414 1.414L12 22l6.364-6.364l-1.414-1.414l-3.95 3.95z"></svg:path>`,
})
export class RiArrowDownLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
