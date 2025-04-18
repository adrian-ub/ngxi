import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSidebarFoldFillIcon],svg[ri-sidebar-fold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM11 8.5v7L7 12z"></svg:path>`,
})
export class RiSidebarFoldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
