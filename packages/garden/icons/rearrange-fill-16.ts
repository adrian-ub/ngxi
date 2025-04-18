import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRearrangeFill16Icon],svg[garden-rearrange-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="13" height="4" rx="1" ry="1"></svg:rect><svg:rect width="13" height="4" y="12" rx="1" ry="1"></svg:rect><svg:rect width="13" height="4" x="3" y="6" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class GardenRearrangeFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
