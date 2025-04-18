import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsShowSidebarIcon],svg[zondicons-show-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H2v14h5zm2 0v14h9V3zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm3 1h3v2H3zm0 3h3v2H3zm0 3h3v2H3z"></svg:path>`,
})
export class ZondiconsShowSidebarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
