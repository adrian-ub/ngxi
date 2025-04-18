import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenListBulletFill12Icon],svg[garden-list-bullet-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 2h5M5 6h5m-5 4h5"></svg:path><svg:g fill="currentColor"><svg:circle cx="2" cy="2" r="1"></svg:circle><svg:circle cx="2" cy="6" r="1"></svg:circle><svg:circle cx="2" cy="10" r="1"></svg:circle></svg:g>`,
})
export class GardenListBulletFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
