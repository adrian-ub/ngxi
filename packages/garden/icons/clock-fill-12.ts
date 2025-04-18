import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClockFill12Icon],svg[garden-clock-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0C2.69 0 0 2.69 0 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m2 7H5.5c-.28 0-.5-.22-.5-.5V3c0-.28.22-.5.5-.5s.5.22.5.5v3h2c.28 0 .5.22.5.5S8.28 7 8 7"></svg:path>`,
})
export class GardenClockFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
