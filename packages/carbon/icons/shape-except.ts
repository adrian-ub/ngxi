import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShapeExceptIcon],svg[carbon-shape-except-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V4a2 2 0 0 0-2-2H4a2.003 2.003 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h6v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M12 20v-8h8v8ZM3.999 4H20v6h-8a2 2 0 0 0-2 2v8H4Z"></svg:path>`,
})
export class CarbonShapeExceptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
