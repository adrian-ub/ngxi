import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScoreSharpIcon],svg[material-symbols-score-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm9-9h1.5V6H12zm3.5 0h1.7l-2-3l2-3h-1.7l-2 3zM7 12h4v-1.5H8.5v-.75H11V6H7v1.5h2.5v.75H7zm12 1v-2.5l-6 6l-4-4l-4 4V19l4-4l4 4z"></svg:path>`,
})
export class MaterialSymbolsScoreSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
