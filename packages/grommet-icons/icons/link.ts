import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsLinkIcon],svg[grommet-icons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M16.125 2.42a2.01 2.01 0 0 1 2.84-.001l2.616 2.617a2 2 0 0 1-.001 2.839l-3.705 3.705a2.01 2.01 0 0 1-2.84.001L12.42 8.964a2 2 0 0 1 .001-2.839zm-10 10a2.01 2.01 0 0 1 2.84-.001l2.616 2.617a2 2 0 0 1-.001 2.839L7.875 21.58a2.01 2.01 0 0 1-2.84.001L2.42 18.964a2 2 0 0 1 .001-2.839zM7 17L17 7"></svg:path>`,
})
export class GrommetIconsLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
