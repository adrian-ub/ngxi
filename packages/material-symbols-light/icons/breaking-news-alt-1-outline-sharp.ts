import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBreakingNewsAlt1OutlineSharpIcon],svg[material-symbols-light-breaking-news-alt-1-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.77 16.5h4.46v-1H6.77zm9.46 0h1v-1h-1zm-9.46-4h4.46v-1H6.77zm9.46 0h1v-5h-1zm-9.46-4h4.46v-1H6.77zM3 20V4h18v16zm1-1h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightBreakingNewsAlt1OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
