import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMarketAnalysisIcon],svg[icon-park-twotone-market-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMarketAnalysis0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M44 11a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v9h40z"></svg:path><svg:path d="m4.112 39.03l12.176-12.3l6.58 6.3L30.91 26l4.48 4.368"></svg:path><svg:path d="M44 18v19a3 3 0 0 1-3 3H12m7.112-26h18M11.11 14h2M4 18v9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMarketAnalysis0)"></svg:path>`,
})
export class IconParkTwotoneMarketAnalysisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
