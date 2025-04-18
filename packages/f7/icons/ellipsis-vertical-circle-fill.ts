import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7EllipsisVerticalCircleFillIcon],svg[f7-ellipsis-vertical-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.094 28C4.094 14.922 14.922 4.094 28 4.094c13.055 0 23.906 10.804 23.906 23.883c0 13.054-10.851 23.93-23.906 23.93C14.922 51.906 4.094 41.054 4.094 28m23.883-8.273c1.851 0 3.515-1.618 3.515-3.493c0-1.922-1.64-3.469-3.515-3.469c-1.852 0-3.493 1.57-3.493 3.47c0 1.874 1.641 3.492 3.493 3.492m0 11.718c1.851 0 3.515-1.594 3.515-3.468c0-1.899-1.64-3.47-3.515-3.47c-1.852 0-3.493 1.594-3.493 3.47c0 1.874 1.641 3.468 3.493 3.468m0 11.742c1.851 0 3.515-1.593 3.515-3.492c0-1.875-1.64-3.492-3.515-3.492c-1.852 0-3.493 1.64-3.493 3.492c0 1.899 1.641 3.492 3.493 3.492"></svg:path>`,
})
export class F7EllipsisVerticalCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
