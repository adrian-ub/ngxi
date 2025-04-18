import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileHandLeftSharpIcon],svg[material-symbols-light-mobile-hand-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.216 21l5.119-6.471l-3.358-3.493l-3.439 1.7V5.134H7.923V3H19v18zM7.23 21q-1.25 0-2.125-.875T4.23 18v-7.48l3-3h.923v9.038l5.308-2.616l.711.75l-4.477 5.64q-.275.35-.658.51q-.384.158-.815.158zm6.23-13.692q.31 0 .54-.23t.23-.54T14 6t-.54-.23t-.539.23t-.23.54t.23.539t.54.23"></svg:path>`,
})
export class MaterialSymbolsLightMobileHandLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
