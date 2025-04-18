import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDynamicFeedSharpIcon],svg[material-symbols-light-dynamic-feed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.23 19.77v-7.231h1v6.23h8.232v1zM7 16V8.77h1V15h8.23v1zm3.77-3.77v-8h10v8zm1-1h8v-4h-8z"></svg:path>`,
})
export class MaterialSymbolsLightDynamicFeedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
