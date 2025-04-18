import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrushOutlineIcon],svg[material-symbols-light-brush-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.385 19.616q-.592 0-1.17-.204t-1.023-.566q.497-.327.845-.878t.348-1.352q0-.847.577-1.424q.577-.576 1.423-.576t1.423.576t.577 1.424q0 1.237-.882 2.118t-2.118.881m0-1q.825 0 1.412-.587t.588-1.412q0-.425-.288-.713t-.712-.288t-.713.288t-.287.713q0 .575-.138 1.05t-.362.9q.125.05.25.05zM11.25 14.5l-1.711-1.711l8.18-8.181q.275-.275.688-.288t.712.288l.312.311q.3.3.3.7t-.3.7zm-3.866 2.116"></svg:path>`,
})
export class MaterialSymbolsLightBrushOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
