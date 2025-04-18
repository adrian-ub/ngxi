import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleLightIcon],svg[ph-fire-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.1 19.38a6 6 0 0 0-9.47 2.56l-23.09 63.31L83.2 59.69a6 6 0 0 0-9 .67C52.85 88.39 42 116.53 42 144a86 86 0 0 0 172 0c0-58.6-50.28-106.67-71.9-124.62M128 218a74.09 74.09 0 0 1-74-74c0-23 8.67-46.87 25.77-70.91l28.05 27.22a6 6 0 0 0 9.82-2.25l23.29-63.86C163.35 54.16 202 95.6 202 144a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhFireSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
