import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGlobeStroke16Icon],svg[garden-globe-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="8" r="7.5"></svg:circle><svg:path d="M1.5 4.5h13m-13 7h13"></svg:path><svg:ellipse cx="8" cy="8" rx="2.5" ry="7.5"></svg:ellipse></svg:g>`,
})
export class GardenGlobeStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
