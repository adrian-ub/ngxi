import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMenuGridRIcon],svg[gg-menu-grid-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4v4H4zm0 6h4v4H4zm4 6H4v4h4zm2-12h4v4h-4zm4 6h-4v4h4zm-4 6h4v4h-4zM20 4h-4v4h4zm-4 6h4v4h-4zm4 6h-4v4h4z"></svg:path>`,
})
export class GgMenuGridRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
