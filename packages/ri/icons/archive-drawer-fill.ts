import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArchiveDrawerFillIcon],svg[ri-archive-drawer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h18v8.003c0 .55-.445.997-.993.997H3.993A.995.995 0 0 1 3 21.003zM3 2.998C3 2.447 3.445 2 3.993 2h16.014c.548 0 .993.446.993.998V11H3zM9 5v2h6V5zm0 11v2h6v-2z"></svg:path>`,
})
export class RiArchiveDrawerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
