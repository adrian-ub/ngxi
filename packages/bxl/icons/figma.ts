import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlFigmaIcon],svg[bxl-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663a3.333 3.333 0 0 0 0 6.665a3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668z"></svg:path><svg:circle cx="15.332" cy="12" r="3.332" fill="currentColor"></svg:circle>`,
})
export class BxlFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
