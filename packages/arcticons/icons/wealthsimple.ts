import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWealthsimpleIcon],svg[arcticons-wealthsimple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.928 20.555l6.724 15.237l9.114-18.894q1.455-2.812 3.734-4.568l-8.447-.122c1.567 1.4 4.713 1.878.1 14.248"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.93 28.835l-5.112-12.682c-.622-1.633-.356-3.09 2.456-3.9H18.982c2.023 1.2 2.756 2.811 2.9 3.256l2.046 5.035l-4.068 8.469l-5.413-13.515c-.611-1.634.411-3.012 1.823-3.246l-11.77.134c2.7 1.089 2.79 2.511 3.734 4.523l8.353 18.883l3.273-6.78"></svg:path>`,
})
export class ArcticonsWealthsimpleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
