import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMenuCheeseIcon],svg[gg-menu-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0-6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-9.737l-2.648 2.648L4.967 13H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class GgMenuCheeseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
