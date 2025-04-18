import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSmileSlightStroke12Icon],svg[garden-smile-slight-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="6" r="5.5"></svg:circle><svg:path stroke-linecap="round" d="M4.13 7.88a4.94 4.94 0 0 0 3.74 0"></svg:path></svg:g><svg:g fill="currentColor"><svg:circle cx="4" cy="5" r="1"></svg:circle><svg:circle cx="8" cy="5" r="1"></svg:circle></svg:g>`,
})
export class GardenSmileSlightStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
