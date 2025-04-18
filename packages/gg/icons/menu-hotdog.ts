import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMenuHotdogIcon],svg[gg-menu-hotdog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zm0 12a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3zm-4-7a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgMenuHotdogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
