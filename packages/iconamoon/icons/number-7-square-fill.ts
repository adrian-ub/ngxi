import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber7SquareFillIcon],svg[iconamoon-number-7-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.001a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM9 6a1 1 0 0 0 0 2h4.523l-3.451 8.629a1 1 0 0 0 1.857.742l4-10A1 1 0 0 0 15 6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber7SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
