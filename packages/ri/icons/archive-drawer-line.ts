import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArchiveDrawerLineIcon],svg[ri-archive-drawer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.992C3 2.444 3.445 2 3.993 2h16.014a1 1 0 0 1 .993.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008zM19 11V4H5v7zm0 2H5v7h14zM9 6h6v2H9zm0 9h6v2H9z"></svg:path>`,
})
export class RiArchiveDrawerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
