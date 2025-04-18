import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolFileIcon],svg[codicon-symbol-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5v13l.5.5h11l.5-.5V4.8zM13 5h-3V2zM3 14V2h6v3.5l.5.5H13v8z"></svg:path>`,
})
export class CodiconSymbolFileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
