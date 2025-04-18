import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGlobeStroke12Icon],svg[garden-globe-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="6" r="5.5"></svg:circle><svg:path d="M3.5 4.5v3m5-3v3m-7.8-3h10.6M.7 7.5h10.6M6 .5l-2.5 4M6 .5l2.5 4m-2.5 7l-2.5-4m2.5 4l2.5-4"></svg:path></svg:g>`,
})
export class GardenGlobeStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
