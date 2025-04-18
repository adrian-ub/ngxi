import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowOrEdgeSharpIcon],svg[material-symbols-arrow-or-edge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 21l-4-4l1.4-1.4l1.6 1.575V11H1V3h2v6h5.5v8.175l1.575-1.575L11.5 17zm9 0l-4-4l1.4-1.4l1.6 1.575V9H21V3h2v8h-5.5v6.2l1.575-1.6L20.5 17z"></svg:path>`,
})
export class MaterialSymbolsArrowOrEdgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
