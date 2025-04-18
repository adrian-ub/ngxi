import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkEraserOffOutlineSharpIcon],svg[material-symbols-light-ink-eraser-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.833 21.26l-5.11-5.11L11.962 19H4.558l-2.55-2.55l6.388-6.627L2.74 4.167l.714-.713l17.092 17.092zM4.985 18h6.55l2.475-2.564l-4.925-4.925l-5.7 5.889zm11.832-3.994l-.713-.714l3.28-3.342L14.435 5l-3.261 3.362l-.707-.708l3.919-4.081l6.396 6.396zM11.56 12.96"></svg:path>`,
})
export class MaterialSymbolsLightInkEraserOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
