import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrushSharpIcon],svg[material-symbols-light-brush-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.385 19.616q-.587 0-1.168-.204q-.58-.204-1.025-.566q.496-.327.844-.878t.349-1.352q0-.847.577-1.424q.577-.576 1.423-.576t1.423.576t.577 1.424q0 1.246-.877 2.123t-2.123.877M11.25 14.5l-1.711-1.711l8.88-8.881l1.712 1.711z"></svg:path>`,
})
export class MaterialSymbolsLightBrushSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
