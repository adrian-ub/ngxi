import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSmileSlightStroke16Icon],svg[garden-smile-slight-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="8" r="7.5"></svg:circle><svg:path stroke-linecap="round" d="M5.5 10.5a6.56 6.56 0 0 0 5 0"></svg:path></svg:g><svg:g fill="currentColor"><svg:circle cx="10" cy="6" r="1"></svg:circle><svg:circle cx="6" cy="6" r="1"></svg:circle></svg:g>`,
})
export class GardenSmileSlightStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
