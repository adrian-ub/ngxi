import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuSearchFillIcon],svg[ri-menu-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.618 13.032a5.5 5.5 0 1 1 1.414-1.414l2.675 2.675l-1.414 1.414zM3 4h5v2H3zm0 7h5v2H3zm0 7h18v2H3z"></svg:path>`,
})
export class RiMenuSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
