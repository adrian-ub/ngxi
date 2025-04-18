import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShieldFill16Icon],svg[garden-shield-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16q-.09 0-.18-.03C7.75 15.94 1 13.25 1 5V3c0-.21.13-.39.32-.47l6.5-2.5q.18-.06.36 0l6.5 2.5c.19.08.32.26.32.47v2c0 8.25-6.75 10.94-6.82 10.97Q8.09 16 8 16"></svg:path>`,
})
export class GardenShieldFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
