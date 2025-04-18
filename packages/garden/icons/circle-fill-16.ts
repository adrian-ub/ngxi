import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCircleFill16Icon],svg[garden-circle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="8" r="7" fill="currentColor"></svg:circle>`,
})
export class GardenCircleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
