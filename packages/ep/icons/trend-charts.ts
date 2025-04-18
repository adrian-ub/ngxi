import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epTrendChartsIcon],svg[ep-trend-charts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 896V128h768v768zm291.712-327.296l128 102.4l180.16-201.792l-47.744-42.624l-139.84 156.608l-128-102.4l-180.16 201.792l47.744 42.624zM816 352a48 48 0 1 0-96 0a48 48 0 0 0 96 0"></svg:path>`,
})
export class EpTrendChartsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
