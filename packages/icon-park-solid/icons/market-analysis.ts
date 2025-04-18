import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMarketAnalysisIcon],svg[icon-park-solid-market-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMarketAnalysis0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M44 11a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v9h40z"></svg:path><svg:path stroke="#fff" d="m4.112 39.03l12.176-12.3l6.58 6.3L30.91 26l4.48 4.368"></svg:path><svg:path stroke="#fff" d="M44 18v19a3 3 0 0 1-3 3H12"></svg:path><svg:path stroke="#000" d="M19.112 14h18M11.11 14h2"></svg:path><svg:path stroke="#fff" d="M4 18v9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMarketAnalysis0)"></svg:path>`,
})
export class IconParkSolidMarketAnalysisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
