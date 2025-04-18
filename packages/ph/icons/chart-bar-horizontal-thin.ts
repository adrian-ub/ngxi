import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalThinIcon],svg[ph-chart-bar-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 100h-44V56a4 4 0 0 0-4-4H52V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-12h92a4 4 0 0 0 4-4v-44h76a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-52-40v40H52V60Zm-32 136H52v-40h88Zm80-48H52v-40h168Z"></svg:path>`,
})
export class PhChartBarHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
