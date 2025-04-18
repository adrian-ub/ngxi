import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowAndEdgeSharpIcon],svg[material-symbols-arrow-and-edge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-4-4l1.4-1.4l1.6 1.575V13q0-.825-.587-1.412T9 11H1V3h2v6h6q.9 0 1.675.363T12 10.35q.55-.625 1.325-.987T15 9h6V3h2v8h-8q-.825 0-1.412.588T13 13v4.175l1.575-1.575L16 17z"></svg:path>`,
})
export class MaterialSymbolsArrowAndEdgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
