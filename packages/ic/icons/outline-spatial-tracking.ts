import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSpatialTrackingIcon],svg[ic-outline-spatial-tracking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zm4.05-16.59L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91"></svg:path><svg:path fill="currentColor" d="m22.88 5.24l-1.41-1.41a5.003 5.003 0 0 0 0 7.07l1.41-1.41a3.01 3.01 0 0 1 0-4.25"></svg:path>`,
})
export class IcOutlineSpatialTrackingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
