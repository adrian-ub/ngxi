import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFilePdfStroke12Icon],svg[garden-file-pdf-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M10.5 3.21V11a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V1A.5.5 0 0 1 2 .5h5.79a.5.5 0 0 1 .35.15l2.21 2.21a.5.5 0 0 1 .15.35zM7.5.5V3a.5.5 0 0 0 .5.5h2.5m-7 6h5"></svg:path><svg:rect width="6" height="3" x="3" y="5" fill="currentColor" rx=".5" ry=".5"></svg:rect>`,
})
export class GardenFilePdfStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
