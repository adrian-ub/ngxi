import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenIndentDecreaseFill16Icon],svg[garden-indent-decrease-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 2h12M8 6h6m-6 4h6M2 14h12"></svg:path><svg:path fill="currentColor" d="M4.15 4.35L1.21 7.29a.996.996 0 0 0 0 1.41l2.94 2.94c.31.32.85.1.85-.35V4.71a.5.5 0 0 0-.85-.36"></svg:path>`,
})
export class GardenIndentDecreaseFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
