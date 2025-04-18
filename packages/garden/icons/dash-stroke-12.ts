import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDashStroke12Icon],svg[garden-dash-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M3 6.5h6"></svg:path>`,
})
export class GardenDashStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
