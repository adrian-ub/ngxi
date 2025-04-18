import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCheckLgStroke16Icon],svg[garden-check-lg-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1 9l4 4L15 3"></svg:path>`,
})
export class GardenCheckLgStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
