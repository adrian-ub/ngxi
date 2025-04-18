import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolKeywordIcon],svg[codicon-symbol-keyword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h-5V3h5zm-1 3h-2v1h2zm-4 0H1v1h9zm2 6H1v1h11zm-5-3H1v1h6zm8 0h-5v1h5zM8 2v3H1V2zM7 3H2v1h5z"></svg:path>`,
})
export class CodiconSymbolKeywordIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
