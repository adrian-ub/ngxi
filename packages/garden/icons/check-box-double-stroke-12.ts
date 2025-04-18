import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCheckBoxDoubleStroke12Icon],svg[garden-check-box-double-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="9" height="9" x=".5" y=".5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.5 5.5L4 7l3.5-3.5m-5 8H11a.5.5 0 0 0 .5-.5V2.5"></svg:path></svg:g>`,
})
export class GardenCheckBoxDoubleStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
