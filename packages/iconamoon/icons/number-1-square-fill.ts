import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber1SquareFillIcon],svg[iconamoon-number-1-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.001a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM13.5 7a1 1 0 0 0-1.707-.707l-2 2a1 1 0 0 0 1.414 1.414l.293-.293V17a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber1SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
