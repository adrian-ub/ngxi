import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSortIcon],svg[bx-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"></svg:path>`,
})
export class BxSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
