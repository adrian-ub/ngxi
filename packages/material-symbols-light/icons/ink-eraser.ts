import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkEraserIcon],svg[material-symbols-light-ink-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.712 18h4.673v1H15.71zM4.558 19l-1.414-1.413q-.478-.48-.491-1.137t.466-1.161L13.273 4.733q.479-.503 1.134-.494t1.134.489l4.09 4.09q.479.479.488 1.146q.01.668-.469 1.146L11.962 19z"></svg:path>`,
})
export class MaterialSymbolsLightInkEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
