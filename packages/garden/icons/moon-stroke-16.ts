import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMoonStroke16Icon],svg[garden-moon-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 10.5a7.5 7.5 0 0 0 7.43-8.53A6.502 6.502 0 0 1 8 14.5a6.5 6.5 0 0 1-6.03-4.07q.505.07 1.03.07Z"></svg:path>`,
})
export class GardenMoonStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
