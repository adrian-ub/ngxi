import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight3SquareFillIcon],svg[iconamoon-arrow-top-right-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm12 10v-4a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-2.293 2.293a1 1 0 1 0 1.414 1.414L13 12.414V14a1 1 0 1 0 2 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
