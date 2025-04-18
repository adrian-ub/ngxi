import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenListBulletStroke16Icon],svg[garden-list-bullet-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5.5 2.5h9m-9 5h9m-9 5h9"></svg:path><svg:g fill="currentColor"><svg:circle cx="2.5" cy="2.5" r="1.5"></svg:circle><svg:circle cx="2.5" cy="7.5" r="1.5"></svg:circle><svg:circle cx="2.5" cy="12.5" r="1.5"></svg:circle></svg:g>`,
})
export class GardenListBulletStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
