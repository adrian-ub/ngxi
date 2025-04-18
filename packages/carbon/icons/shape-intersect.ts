import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShapeIntersectIcon],svg[carbon-shape-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V4a2.003 2.003 0 0 0-2-2H4a2.003 2.003 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h6v6a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V12a2.003 2.003 0 0 0-2-2M4 20V4h16v6h-8a2.003 2.003 0 0 0-2 2v8Zm8 8v-6h8a2.003 2.003 0 0 0 2-2v-8h6v16Z"></svg:path>`,
})
export class CarbonShapeIntersectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
