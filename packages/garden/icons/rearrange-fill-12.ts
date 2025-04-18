import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRearrangeFill12Icon],svg[garden-rearrange-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="10" height="3" rx="1" ry="1"></svg:rect><svg:rect width="10" height="3" x="2" y="4" rx="1" ry="1"></svg:rect><svg:rect width="10" height="3" y="8" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenRearrangeFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
