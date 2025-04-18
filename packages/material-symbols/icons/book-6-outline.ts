import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBook6OutlineIcon],svg[material-symbols-book-6-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h11v16H6q-.425 0-.712.288T5 19t.288.713T6 20h13V4h2v18zm0-6h9V4H6q-.425 0-.712.288T5 5v11.175q.25-.075.488-.125T6 16m.75-2.5h1.2l.65-1.8h2.825l.625 1.8h1.2l-2.625-7h-1.25zm2.2-2.8l1.025-2.9h.05l1.025 2.9zM5 16.175V4z"></svg:path>`,
})
export class MaterialSymbolsBook6OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
