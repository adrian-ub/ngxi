import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCylinderFillIcon],svg[ph-cylinder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 208c-29.83 0-56-13.08-56-28V77.43C82.92 88.5 103.9 96 128 96s45.08-7.5 56-18.57V196c0 14.92-26.17 28-56 28"></svg:path>`,
})
export class PhCylinderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
