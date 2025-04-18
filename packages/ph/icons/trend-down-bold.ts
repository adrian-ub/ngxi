import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrendDownBoldIcon],svg[ph-trend-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h35l-67-67l-31.51 31.52a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L96 119l31.51-31.52a12 12 0 0 1 17 0L220 163v-35a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhTrendDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
