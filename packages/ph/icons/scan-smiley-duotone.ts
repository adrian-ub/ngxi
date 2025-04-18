import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyDuotoneIcon],svg[ph-scan-smiley-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 128a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></svg:path><svg:path d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m88 116a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m56-72a56 56 0 1 0-56 56a56.06 56.06 0 0 0 56-56m-68-12a12 12 0 1 0-12 12a12 12 0 0 0 12-12m36-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-5.29 42c-3.81 3.37-12 6-18.71 6s-14.9-2.63-18.71-6a8 8 0 1 0-10.58 12c7.83 6.91 20.35 10 29.29 10s21.46-3.09 29.29-10a8 8 0 1 0-10.58-12"></svg:path></svg:g>`,
})
export class PhScanSmileyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
