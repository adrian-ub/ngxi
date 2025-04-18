import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchThinIcon],svg[ph-circle-notch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a100 100 0 0 1-200 0c0-39.4 22.9-75.37 58.33-91.63a4 4 0 1 1 3.34 7.27C57.07 58.6 36 91.71 36 128a92 92 0 0 0 184 0c0-36.29-21.07-69.4-53.67-84.36a4 4 0 1 1 3.34-7.27C205.1 52.63 228 88.6 228 128"></svg:path>`,
})
export class PhCircleNotchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
