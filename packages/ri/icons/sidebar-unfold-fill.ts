import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSidebarUnfoldFillIcon],svg[ri-sidebar-unfold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM7 8.5l4 3.5l-4 3.5z"></svg:path>`,
})
export class RiSidebarUnfoldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
