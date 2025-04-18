import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLifesaverStroke12Icon],svg[garden-lifesaver-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="6" r="5.5"></svg:circle><svg:circle cx="6" cy="6" r="2.5"></svg:circle><svg:path d="m8 8l2 2M2 2l2 2m0 4l-2 2m8-8L8 4"></svg:path></svg:g>`,
})
export class GardenLifesaverStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
