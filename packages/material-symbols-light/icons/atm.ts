import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAtmIcon],svg[material-symbols-light-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.587 14.692v-4.5h-2.25v-.884h5.384v.884h-2.25v4.5zm-8.087 0v-4.615q0-.327.221-.548t.548-.221h2.847q.326 0 .548.22q.22.222.22.549v4.615H6V13H3.385v1.692zm.885-2.576H6v-1.924H3.385zm11.846 2.576v-4.615q0-.327.221-.548T16 9.308h4.73q.328 0 .549.22q.221.222.221.549v4.615h-.885v-4.5h-1.807v3.5h-.885v-3.5h-1.807v4.5z"></svg:path>`,
})
export class MaterialSymbolsLightAtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
