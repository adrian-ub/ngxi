import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCarWashingFillIcon],svg[ri-car-washing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.417-4.029A2 2 0 0 1 6.132 8h11.736a2 2 0 0 1 1.715.971L22 13v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM4.332 13h15.336l-1.8-3H6.132zM6.5 18a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5.44 3.44L6.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0m5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0m5.5 0l1.06-1.061l1.06 1.06a1.5 1.5 0 1 1-2.121 0"></svg:path>`,
})
export class RiCarWashingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
