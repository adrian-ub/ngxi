import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMenuCakeIcon],svg[gg-menu-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-7 2a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgMenuCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
