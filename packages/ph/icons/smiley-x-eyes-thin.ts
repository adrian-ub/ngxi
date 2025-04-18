import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSmileyXEyesThinIcon],svg[ph-smiley-x-eyes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m58.83-121.17L173.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L168 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L162.34 112l-13.17-13.17a4 4 0 0 1 5.66-5.66L168 106.34l13.17-13.17a4 4 0 1 1 5.66 5.66m-80 0L93.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L88 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L82.34 112L69.17 98.83a4 4 0 0 1 5.66-5.66L88 106.34l13.17-13.17a4 4 0 0 1 5.66 5.66M136 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSmileyXEyesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
