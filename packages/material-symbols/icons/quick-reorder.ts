import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsQuickReorderIcon],svg[material-symbols-quick-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20v-2h5v-2H2v-2h4v-2H3.05v-2H6V7.05l-1.95-4.2L5.85 2L8.2 7h11.6l-1.95-4.15l1.8-.85L22 7v13zm11-7h4q.425 0 .713-.288T17 12t-.288-.712T16 11h-4q-.425 0-.712.288T11 12t.288.713T12 13"></svg:path>`,
})
export class MaterialSymbolsQuickReorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
