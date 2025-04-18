import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggShapeSquareIcon],svg[gg-shape-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 7H7v10h10zM4 4v16h16V4z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
