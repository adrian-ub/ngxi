import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHeartStroke12Icon],svg[garden-heart-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8.5 1c-1.1 0-2 .6-2.5 1.5C5.5 1.6 4.6 1 3.5 1c-1.6 0-3 1-3 3C.5 6.5 6 11.5 6 11.5s5.5-5 5.5-7.5c0-2-1.4-3-3-3z"></svg:path>`,
})
export class GardenHeartStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
