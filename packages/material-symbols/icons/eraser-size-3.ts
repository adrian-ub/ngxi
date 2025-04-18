import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEraserSize3Icon],svg[material-symbols-eraser-size-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 19q-1.45 0-2.475-1.025T5 15.5q0-.675.263-1.325t.762-1.15l7-7q.5-.5 1.15-.763T15.5 5q1.45 0 2.475 1.025T19 8.5q0 .675-.262 1.325t-.763 1.15l-7 7q-.5.5-1.15.763T8.5 19"></svg:path>`,
})
export class MaterialSymbolsEraserSize3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
