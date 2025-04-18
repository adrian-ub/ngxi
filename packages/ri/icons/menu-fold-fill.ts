import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuFoldFillIcon],svg[ri-menu-fold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v2H3v-2zM7 3.5v10l-5-5zM21 11v2h-9v-2zm0-7v2h-9V4z"></svg:path>`,
})
export class RiMenuFoldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
