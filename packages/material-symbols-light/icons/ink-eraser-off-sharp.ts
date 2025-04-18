import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkEraserOffSharpIcon],svg[material-symbols-light-ink-eraser-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.833 21.26l-5.11-5.11L11.962 19H4.558l-2.55-2.55l6.388-6.627L2.74 4.167l.714-.713l17.092 17.092zm-3.016-7.254l-6.351-6.352l3.919-4.081l6.396 6.396z"></svg:path>`,
})
export class MaterialSymbolsLightInkEraserOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
