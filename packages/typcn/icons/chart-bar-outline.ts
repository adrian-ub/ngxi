import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnChartBarOutlineIcon],svg[typcn-chart-bar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5c-.771 0-1.468.301-2 .779V4c0-1.654-1.346-3-3-3S9 2.346 9 4v4.779A3 3 0 0 0 7 8c-1.654 0-3 1.346-3 3v6h16V8c0-1.654-1.346-3-3-3m-5-2c.551 0 1 .448 1 1v11h-2V4c0-.552.449-1 1-1M8 15H6v-4a1.001 1.001 0 0 1 2 0zm10 0h-2V8a1.001 1.001 0 0 1 2 0zm1 6H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2"></svg:path>`,
})
export class TypcnChartBarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
