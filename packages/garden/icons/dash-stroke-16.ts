import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDashStroke16Icon],svg[garden-dash-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M3 8.5h10"></svg:path>`,
})
export class GardenDashStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
