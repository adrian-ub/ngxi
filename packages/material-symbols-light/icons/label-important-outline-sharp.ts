import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelImportantOutlineSharpIcon],svg[material-symbols-light-label-important-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 19l5.5-7L3 4.98h12.462L21 12l-5.52 7zm2-1h10l4.75-6L15 5.98H5L9.75 12zm7.385-6.02"></svg:path>`,
})
export class MaterialSymbolsLightLabelImportantOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
