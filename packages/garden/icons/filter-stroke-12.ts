import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFilterStroke12Icon],svg[garden-filter-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.78 1.35L4.5 5v5.69c0 .37.39.61.72.45l2-1c.17-.09.28-.26.28-.45V5l3.72-3.65a.5.5 0 0 0-.35-.85H1.14a.5.5 0 0 0-.36.85z"></svg:path>`,
})
export class GardenFilterStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
