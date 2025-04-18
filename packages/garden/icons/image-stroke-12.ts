import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenImageStroke12Icon],svg[garden-image-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="9" x=".5" y="1.5" rx=".5" ry=".5"></svg:rect><svg:path d="m.5 10.5l3.65-3.65a.5.5 0 0 1 .71 0l1.79 1.8a.5.5 0 0 0 .71 0l.79-.79a.5.5 0 0 1 .71 0L11 10"></svg:path></svg:g><svg:circle cx="8" cy="4" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenImageStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
