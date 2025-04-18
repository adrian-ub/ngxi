import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeckIcon],svg[material-symbols-deck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22V9H2l10-7l10 7h-9v13zm-8 0v-5.25l-.8-4.4L4.15 12l.75 4H9v6H7v-4H5v4zm12 0v-6h4.1l.75-4l1.95.35l-.8 4.4V22h-2v-4h-2v4z"></svg:path>`,
})
export class MaterialSymbolsDeckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
