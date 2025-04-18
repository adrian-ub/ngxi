import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCombineColumnsSharpIcon],svg[material-symbols-light-combine-columns-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.615 20V4h6v3.312q-1.557.465-2.529 1.763q-.97 1.298-.97 2.925t.97 2.925t2.53 1.764V20zm8.77 0v-3.311q1.557-.466 2.529-1.764q.97-1.298.97-2.925t-.97-2.925t-2.53-1.764V4h6v16zM11.5 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightCombineColumnsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
