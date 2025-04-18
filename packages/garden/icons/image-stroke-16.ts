import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenImageStroke16Icon],svg[garden-image-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="15" height="13" x=".5" y="1.5" rx=".5" ry=".5"></svg:rect><svg:path d="m.5 14l5.15-5.15a.5.5 0 0 1 .71 0l3.29 3.29a.5.5 0 0 0 .71 0l1.29-1.29a.5.5 0 0 1 .71 0L15.5 14"></svg:path></svg:g><svg:circle cx="11.5" cy="5.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class GardenImageStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
