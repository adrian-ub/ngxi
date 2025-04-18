import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProgressiveIcon],svg[arcticons-progressive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.595 6.697h14.952c4.605 0 6.476 3.177 5.829 4.793L36.92 25.105c-1.056 2.634-3.753 3.767-6.598 4.163c-.67.093-1.59.126-10.437.126l-5.543 11.91H5.5zM28.54 22.78c.277-.077.69-.35 1.025-.678c.567-.553.733-.873 3.384-6.533c.797-1.702.838-2.54.05-2.558l-5.447-.124l-4.603 9.901c-.071.152 4.983.16 5.591-.008"></svg:path>`,
})
export class ArcticonsProgressiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
