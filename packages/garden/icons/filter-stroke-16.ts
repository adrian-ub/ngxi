import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFilterStroke16Icon],svg[garden-filter-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.35 2.35L6.5 7.5v7.07c0 .4.45.64.78.42l2-1.33c.14-.09.22-.25.22-.42V7.5l5.15-5.15a.5.5 0 0 0-.35-.85H1.71a.5.5 0 0 0-.36.85z"></svg:path>`,
})
export class GardenFilterStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
