import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrendingFlatRoundedIcon],svg[material-symbols-light-trending-flat-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.079 12.5H4.5q-.213 0-.357-.143T4 12t.143-.357t.357-.143h14.579l-2.24-2.246q-.147-.146-.153-.344q-.007-.199.158-.364q.166-.16.357-.162t.351.162l2.883 2.888q.242.243.242.566t-.242.566l-2.889 2.888q-.14.14-.341.15t-.366-.15q-.166-.166-.166-.357t.166-.357z"></svg:path>`,
})
export class MaterialSymbolsLightTrendingFlatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
