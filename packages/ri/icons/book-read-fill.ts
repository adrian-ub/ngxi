import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBookReadFillIcon],svg[ri-book-read-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM12 5v14h8V5zm1 2h6v2h-6zm0 3h6v2h-6z"></svg:path>`,
})
export class RiBookReadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
