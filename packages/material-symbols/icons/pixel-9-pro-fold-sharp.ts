import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPixel9ProFoldSharpIcon],svg[material-symbols-pixel-9-pro-fold-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V3h20v18zm10-2h8V5h-8zm-2-7v-2H4v2zm6-4q.425 0 .713-.288T17 7t-.288-.712T16 6t-.712.288T15 7t.288.713T16 8m-6 0V6H4v2z"></svg:path>`,
})
export class MaterialSymbolsPixel9ProFoldSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
