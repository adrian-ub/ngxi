import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseBoldIcon],svg[ph-clock-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 80v41.21l34.17 20.5a12 12 0 1 1-12.34 20.58l-40-24A12 12 0 0 1 116 128V80a12 12 0 0 1 24 0m84-28a12 12 0 0 0-12 12v7.37c-4.21-4.67-8.58-9.31-13.29-14.08a100 100 0 1 0-2.07 143.44a12 12 0 0 0-16.48-17.46a76 76 0 1 1 1.53-109.06C187.61 80.2 193 86 198.23 92H184a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhClockClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
