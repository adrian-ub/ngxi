import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilter2FillIcon],svg[ri-filter-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14L4 5V3h16v2l-6 9v6l-4 2z"></svg:path>`,
})
export class RiFilter2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
