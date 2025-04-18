import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenListBulletStroke12Icon],svg[garden-list-bullet-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5 2.5h5.5M5 6.5h5.5m-5.5 4h5.5"></svg:path><svg:g fill="currentColor"><svg:circle cx="2" cy="2.5" r="1"></svg:circle><svg:circle cx="2" cy="6.5" r="1"></svg:circle><svg:circle cx="2" cy="10.5" r="1"></svg:circle></svg:g>`,
})
export class GardenListBulletStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
