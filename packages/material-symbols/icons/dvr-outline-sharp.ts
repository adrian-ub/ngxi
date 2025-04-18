import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDvrOutlineSharpIcon],svg[material-symbols-dvr-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-4q.425 0 .713-.288T8 9t-.288-.712T7 8t-.712.288T6 9t.288.713T7 10m2 4h9v-2H9zm0-4h9V8H9zM8 21v-2H2V3h20v16h-6v2zm-4-4h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsDvrOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
