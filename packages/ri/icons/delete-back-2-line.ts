import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeleteBack2LineIcon],svg[ri-delete-back-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3m.535 2l-4.667 7l4.667 7H20V5zM13 10.586l2.828-2.829l1.414 1.415L14.414 12l2.828 2.828l-1.414 1.415l-2.829-2.829l-2.828 2.829l-1.414-1.415L11.585 12L8.757 9.172l1.414-1.415z"></svg:path>`,
})
export class RiDeleteBack2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
