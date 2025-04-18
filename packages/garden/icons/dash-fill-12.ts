import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDashFill12Icon],svg[garden-dash-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 6h6"></svg:path>`,
})
export class GardenDashFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
