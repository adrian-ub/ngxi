import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMarketAnalysisIcon],svg[icon-park-market-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 11C44 9.34315 42.6569 8 41 8H7C5.34315 8 4 9.34315 4 11V20H44V11Z"></svg:path><svg:path stroke="#000" d="M4.1123 39.0301L16.2879 26.7293L22.8672 33.0301L30.9105 26L35.391 30.368"></svg:path><svg:path stroke="#000" d="M44 18V37C44 38.6569 42.6569 40 41 40H12"></svg:path><svg:path stroke="#fff" d="M19.1118 14H37.1118"></svg:path><svg:path stroke="#fff" d="M11.1108 14H13.1108"></svg:path><svg:path stroke="#000" d="M4 18V27"></svg:path></svg:g>`,
})
export class IconParkMarketAnalysisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
