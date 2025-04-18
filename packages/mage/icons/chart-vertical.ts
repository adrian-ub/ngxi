import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChartVerticalIcon],svg[mage-chart-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M13.632 6.352V4.589c0-.565-.458-1.023-1.023-1.023H7.103c-.565 0-1.023.458-1.023 1.023v1.763c0 .565.458 1.023 1.023 1.023h5.506c.565 0 1.023-.458 1.023-1.023m7.618 6.53v-1.764c0-.564-.458-1.022-1.023-1.022H7.103c-.565 0-1.023.458-1.023 1.022v1.764c0 .564.458 1.022 1.023 1.022h13.124c.565 0 1.023-.458 1.023-1.022m-3.33 6.528v-1.762c0-.565-.458-1.023-1.023-1.023H7.114c-.565 0-1.023.458-1.023 1.023v1.763c0 .565.458 1.023 1.023 1.023h9.783c.565 0 1.023-.458 1.023-1.023M2.75 3.294v17.412"></svg:path>`,
})
export class MageChartVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
