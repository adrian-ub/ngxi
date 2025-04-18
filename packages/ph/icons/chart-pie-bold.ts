import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartPieBoldIcon],svg[ph-chart-pie-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 24.87a84 84 0 0 1 54 31.2l-54 31.15Zm-90 114.3a83.94 83.94 0 0 1 66-114.3v76.2ZM128 212a83.88 83.88 0 0 1-65.95-32.07L206 96.83A84 84 0 0 1 128 212"></svg:path>`,
})
export class PhChartPieBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
