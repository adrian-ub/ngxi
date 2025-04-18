import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserCircleStroke12Icon],svg[garden-user-circle-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="6" r="5.5"></svg:circle><svg:circle cx="6" cy="4" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="M8.5 9C8.1 8.1 7 7.5 6 7.5S3.9 8.1 3.5 9"></svg:path></svg:g>`,
})
export class GardenUserCircleStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
