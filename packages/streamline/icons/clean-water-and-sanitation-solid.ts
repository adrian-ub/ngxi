import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCleanWaterAndSanitationSolidIcon],svg[streamline-clean-water-and-sanitation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.198 2.022A1.765 1.765 0 0 1 3.95.038h5.823c1.062 0 1.883.93 1.752 1.984l-.762 6.092A1.765 1.765 0 0 1 9.01 9.661H7.498v1.304h.713a.75.75 0 0 1 .53 1.28l-1.46 1.461a.75.75 0 0 1-1.066-.002l-1.46-1.459a.75.75 0 0 1 .53-1.28h.713V9.661H4.712c-.89 0-1.642-.663-1.752-1.547zM5.351 5.22c-.342.07-.739.11-1.23.089l-.434-3.473a.265.265 0 0 1 .263-.298h5.823c.16 0 .283.14.263.298l-.289 2.31a6 6 0 0 0-1.54.097c-.607.12-1.091.329-1.53.516l-.013.006c-.437.188-.83.354-1.313.455" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCleanWaterAndSanitationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
