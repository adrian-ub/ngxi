import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBarChartHorizontalIcon],svg[hugeicons-bar-chart-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 21.072h12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8.999c-2.62 0-3.929 0-4.589-.66s-.66-1.97-.66-4.59v-10c0-.41-.34-.75-.75-.75s-.75.34-.75.75v10c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.649 1.1zm-2-4h9c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7c-.41 0-.75.34-.75.75s.34.75.75.75m13-4H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75m-13-4h6c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7c-.41 0-.75.34-.75.75s.34.75.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsBarChartHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
