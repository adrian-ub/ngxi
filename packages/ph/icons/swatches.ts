import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSwatchesIcon],svg[ph-swatches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12m152-23.81V208a16 16 0 0 1-16 16H76a46.4 46.4 0 0 1-7.94-.68a44 44 0 0 1-35.43-50.95l25-143.13a15.94 15.94 0 0 1 18.47-13L130.84 26a16 16 0 0 1 12.92 18.52l-12.08 69L199.49 89a16 16 0 0 1 20.45 9.52L239 150.69a18.4 18.4 0 0 1 1 5.5m-137 28.68l25-143.13L73.46 32l-25 143.1a28 28 0 0 0 22.44 32.47A27.3 27.3 0 0 0 91.46 203A27.84 27.84 0 0 0 103 184.87M116.78 195L224 156.11L204.92 104l-76.42 27.7l-9.78 55.92a44.6 44.6 0 0 1-1.94 7.38M224 173.12L127.74 208H224Z"></svg:path>`,
})
export class PhSwatchesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
