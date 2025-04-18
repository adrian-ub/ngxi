import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRearrangeStroke16Icon],svg[garden-rearrange-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 2h11M1 14h11M4 8h11"></svg:path>`,
})
export class GardenRearrangeStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
