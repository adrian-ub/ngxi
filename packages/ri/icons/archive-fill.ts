import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArchiveFillIcon],svg[ri-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10h18v10.004c0 .55-.445.996-.993.996H3.993A.994.994 0 0 1 3 20.004zm6 2v2h6v-2zM2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1v4H2z"></svg:path>`,
})
export class RiArchiveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
