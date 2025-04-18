import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomUp4SquareFillIcon],svg[iconamoon-arrow-bottom-up-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm12 6a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomUp4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
