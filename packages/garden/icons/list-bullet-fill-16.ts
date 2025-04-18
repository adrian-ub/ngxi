import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenListBulletFill16Icon],svg[garden-list-bullet-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 3h8M6 8h8m-8 5h8"></svg:path><svg:g fill="currentColor"><svg:circle cx="2.5" cy="3" r="1.5"></svg:circle><svg:circle cx="2.5" cy="8" r="1.5"></svg:circle><svg:circle cx="2.5" cy="13" r="1.5"></svg:circle></svg:g>`,
})
export class GardenListBulletFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
