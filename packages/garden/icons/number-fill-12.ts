import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNumberFill12Icon],svg[garden-number-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1.5 4H11M1 8h9.5M9 1L7 11M5 1L3 11"></svg:path>`,
})
export class GardenNumberFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
