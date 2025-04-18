import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClockStroke16Icon],svg[garden-clock-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="8" r="7.5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3v5.5H11"></svg:path></svg:g>`,
})
export class GardenClockStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
