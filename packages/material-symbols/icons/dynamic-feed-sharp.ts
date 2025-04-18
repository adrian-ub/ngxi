import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDynamicFeedSharpIcon],svg[material-symbols-dynamic-feed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-9h2v7h9v2zm4-4V8h2v7h9v2zm4-4V3h12v10zm2-2h8V7h-8z"></svg:path>`,
})
export class MaterialSymbolsDynamicFeedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
