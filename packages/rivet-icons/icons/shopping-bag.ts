import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsShoppingBagIcon],svg[rivet-icons-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a4 4 0 1 1 8 0h4v12H0V4zm0 2H2v8h12V6h-2v2h-2V6H6v2H4zm6-2a2 2 0 1 0-4 0z"></svg:path>`,
})
export class RivetIconsShoppingBagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
