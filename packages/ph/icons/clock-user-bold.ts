import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClockUserBoldIcon],svg[ph-clock-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m181.36 114.73l-48 24A12 12 0 0 1 116 128V72a12 12 0 0 1 24 0v36.58l30.63-15.31a12 12 0 1 1 10.73 21.46m45.72 120.86a12 12 0 0 1-14.68-8.51C210 218.2 201.65 212 192 212s-18 6.2-20.4 15.08A12 12 0 0 1 160 236a11.8 11.8 0 0 1-3.09-.41a12 12 0 0 1-8.52-14.68a43.76 43.76 0 0 1 15.08-23a36 36 0 1 1 57 0a43.7 43.7 0 0 1 15.08 23a12 12 0 0 1-8.47 14.68M180 176a12 12 0 1 0 12-12a12 12 0 0 0-12 12m-62.52 35.35a84 84 0 1 1 93.87-93.87a12 12 0 1 0 23.81-3a108 108 0 1 0-120.65 120.68a11 11 0 0 0 1.5.1a12 12 0 0 0 1.47-23.91"></svg:path>`,
})
export class PhClockUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
