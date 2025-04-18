import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCheckBoxDoubleStroke16Icon],svg[garden-check-box-double-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="11" x="1.5" y="1.5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5L6 9l4.5-4.5m-6 10H14a.5.5 0 0 0 .5-.5V4.5"></svg:path></svg:g>`,
})
export class GardenCheckBoxDoubleStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
