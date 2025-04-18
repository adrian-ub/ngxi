import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTestTubeThinIcon],svg[ph-test-tube-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 89.18l-60-60a4 4 0 0 0-5.66 0L39.94 158.41a40.78 40.78 0 0 0 57.66 57.67L210.16 103.5l23.1-7.7a4 4 0 0 0 1.57-6.62M91.94 210.42a32.77 32.77 0 1 1-46.34-46.35L75 134.63c9.2-3.38 23.94-5.08 43.11 4.93c12.09 6.31 22.74 8.48 31.66 8.48c1.64 0 3.2-.09 4.73-.22Zm114.8-114.21a4.06 4.06 0 0 0-1.57 1L165 137.39c-9.2 3.38-23.94 5.08-43.11-4.93c-14.3-7.47-26.58-9.13-36.38-8.27L172 37.66l52.6 52.6Z"></svg:path>`,
})
export class PhTestTubeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
