import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBreakingNewsOutlineSharpIcon],svg[material-symbols-light-breaking-news-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.23 16.77h1.54v-1.54H6.23zm.27-3h1V7.5h-1zm5 2.73h6v-1h-6zm0-4h6v-1h-6zm0-4h6v-1h-6zM3 20V4h18v16zm1-1h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightBreakingNewsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
