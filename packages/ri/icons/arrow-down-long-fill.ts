import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDownLongFillIcon],svg[ri-arrow-down-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v13.586H5.586L12 22l6.414-6.414H13z"></svg:path>`,
})
export class RiArrowDownLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
