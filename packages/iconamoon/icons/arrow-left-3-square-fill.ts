import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowLeft3SquareFillIcon],svg[iconamoon-arrow-left-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm9.707 5.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 13H15a1 1 0 1 0 0-2h-3.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowLeft3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
