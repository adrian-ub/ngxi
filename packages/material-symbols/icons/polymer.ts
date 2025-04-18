import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPolymerIcon],svg[material-symbols-polymer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.95 20L.5 12L5 4h4l-4.5 8l2.6 4.65L14.9 4H19l4.5 8l-4.5 8h-4l4.5-8l-2.6-4.6L9.15 20z"></svg:path>`,
})
export class MaterialSymbolsPolymerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
