import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilTriangleDownIcon],svg[il-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 171h232L116 287z"></svg:path>`,
})
export class IlTriangleDownIcon {
  readonly viewBox = input("0 0 240 700")
  readonly width = input("0.35em")
  readonly height = input("1em")
}
