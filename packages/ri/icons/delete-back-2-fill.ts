import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeleteBack2FillIcon],svg[ri-delete-back-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3m6.464 7.586l-2.828-2.829l-1.414 1.415L11.585 12l-2.828 2.828l1.414 1.415l2.828-2.829l2.829 2.829l1.414-1.415L14.414 12l2.828-2.828l-1.414-1.415z"></svg:path>`,
})
export class RiDeleteBack2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
