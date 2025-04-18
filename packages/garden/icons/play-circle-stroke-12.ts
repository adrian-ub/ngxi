import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlayCircleStroke12Icon],svg[garden-play-circle-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor"></svg:circle><svg:path fill="currentColor" d="M8.467 5.6L4.8 2.85a.5.5 0 0 0-.8.4v5.5a.5.5 0 0 0 .8.4L8.467 6.4a.5.5 0 0 0 0-.8"></svg:path>`,
})
export class GardenPlayCircleStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
