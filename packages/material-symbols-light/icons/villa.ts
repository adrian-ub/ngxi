import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVillaIcon],svg[material-symbols-light-villa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20v-6.992h6.923q0-.64.452-1.093q.451-.453 1.085-.453t1.087.452T20 13v7h-4.23v-3.308h-1.54V20zm-6 0V8.692l11.23-4.326V12H9v8z"></svg:path>`,
})
export class MaterialSymbolsLightVillaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
