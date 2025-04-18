import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightListAltSharpIcon],svg[material-symbols-light-list-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.346 16.539h1.539V15H7.346zm0-3.77h1.539v-1.538H7.346zm0-3.769h1.539V7.462H7.346zm3.846 7.27h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightListAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
