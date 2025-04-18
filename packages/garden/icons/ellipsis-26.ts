import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEllipsis26Icon],svg[garden-ellipsis-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="7" cy="13" r="2"></svg:circle><svg:circle cx="13" cy="13" r="2"></svg:circle><svg:circle cx="19" cy="13" r="2"></svg:circle></svg:g>`,
})
export class GardenEllipsis26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
