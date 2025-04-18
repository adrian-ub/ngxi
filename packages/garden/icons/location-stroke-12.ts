import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLocationStroke12Icon],svg[garden-location-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="5" r="1.5"></svg:circle><svg:path stroke-linejoin="round" d="M6 .5a4.39 4.39 0 0 0-4.5 4.27c0 1.59.72 2.42 1.64 3.58s2 2.18 2.86 3.14c.87-1 2-2 2.85-3.14s1.65-2 1.65-3.58A4.59 4.59 0 0 0 6 .5z"></svg:path></svg:g>`,
})
export class GardenLocationStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
