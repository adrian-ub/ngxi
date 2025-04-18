import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRecentActorsSharpIcon],svg[material-symbols-recent-actors-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h14v14zm2-3.65q1.1-.65 2.35-1T8 14t2.65.35t2.35 1V7H3zm5-2.1q-1.15 0-1.95-.8t-.8-1.95t.8-1.95T8 7.75t1.95.8t.8 1.95t-.8 1.95t-1.95.8M17 19V5h2v14zm4 0V5h2v14z"></svg:path>`,
})
export class MaterialSymbolsRecentActorsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
