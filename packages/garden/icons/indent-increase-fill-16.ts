import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenIndentIncreaseFill16Icon],svg[garden-indent-increase-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 2h12M8 6h6m-6 4h6M2 14h12"></svg:path><svg:path fill="currentColor" d="m1.85 4.35l2.94 2.94c.39.39.39 1.02 0 1.41l-2.94 2.94c-.31.32-.85.1-.85-.35V4.71a.5.5 0 0 1 .85-.36"></svg:path>`,
})
export class GardenIndentIncreaseFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
