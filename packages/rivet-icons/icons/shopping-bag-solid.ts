import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsShoppingBagSolidIcon],svg[rivet-icons-shopping-bag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a4 4 0 1 1 8 0h4v12H0V4zm4-2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M4 6v2h2V6zm6 0v2h2V6z"></svg:path>`,
})
export class RivetIconsShoppingBagSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
