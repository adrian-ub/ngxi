import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClockStroke12Icon],svg[garden-clock-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="6" r="5.5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5.5 3v3.5H8"></svg:path></svg:g>`,
})
export class GardenClockStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
