import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber3SquareFillIcon],svg[iconamoon-number-3-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.001a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM10 6a1 1 0 0 0 0 2h3l-1.8 2.4A1 1 0 0 0 12 12a2 2 0 1 1-1.333 3.491a1 1 0 1 0-1.334 1.49a4 4 0 1 0 4.379-6.597L15.8 7.6A1 1 0 0 0 15 6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber3SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
