import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMvLineIcon],svg[ri-mv-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM4 5v14h16V5zm8 7.17V6h5v2h-3v7a3 3 0 1 1-2-2.83"></svg:path>`,
})
export class RiMvLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
