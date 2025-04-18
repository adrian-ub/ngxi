import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLifesaverStroke16Icon],svg[garden-lifesaver-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="8" r="7.5"></svg:circle><svg:circle cx="8" cy="8" r="3.5"></svg:circle><svg:path d="m10.5 10.5l3 3m-11-11l3 3m0 5l-3 3m11-11l-3 3"></svg:path></svg:g>`,
})
export class GardenLifesaverStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
