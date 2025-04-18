import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMenuOreosIcon],svg[gg-menu-oreos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zm0 8a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3zm0 2a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zm0 8a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3z"></svg:path>`,
})
export class GgMenuOreosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
