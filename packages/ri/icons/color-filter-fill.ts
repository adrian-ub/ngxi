import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riColorFilterFillIcon],svg[ri-color-filter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.572 8.027a5 5 0 1 0-5.101 2.945a7 7 0 0 1 5.1-2.945m-3.418 9.92a7 7 0 0 0 0-5.892a5 5 0 1 1 0 5.89m-6.88-7.92a7 7 0 0 0 5.1 2.946a5 5 0 1 1-5.1-2.946"></svg:path>`,
})
export class RiColorFilterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
