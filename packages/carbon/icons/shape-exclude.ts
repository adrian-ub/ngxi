import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShapeExcludeIcon],svg[carbon-shape-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h10V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6V12a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M28 10h-6v10a2 2 0 0 1-2 2H10v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonShapeExcludeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
