import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riClapperboardLineIcon],svg[ri-clapperboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.998 7l2.31-4h3.69l-2.31 4zm6 0l2.31-4h3.69l-2.31 4zm6 0l2.31-4h.7c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h3.006L4 6.46V19h16V7z"></svg:path>`,
})
export class RiClapperboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
