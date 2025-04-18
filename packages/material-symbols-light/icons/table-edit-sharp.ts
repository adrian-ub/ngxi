import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableEditSharpIcon],svg[material-symbols-light-table-edit-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.885V8.769h7.5v5.116zm0-6.116V4h16v3.77zM4 20v-5.115h7.5V20zm8.5-6.116V8.77h7.304v1.039l-4.102 4.077zM13.23 21v-2.21l5.96-5.934l2.19 2.204L15.44 21zm5.96-4.985l.925-.956l-.924-.943l-.95.95z"></svg:path>`,
})
export class MaterialSymbolsLightTableEditSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
