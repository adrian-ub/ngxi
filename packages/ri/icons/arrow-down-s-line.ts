import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDownSLineIcon],svg[ri-arrow-down-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"></svg:path>`,
})
export class RiArrowDownSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
