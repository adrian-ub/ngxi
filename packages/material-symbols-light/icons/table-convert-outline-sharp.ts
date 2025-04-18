import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableConvertOutlineSharpIcon],svg[material-symbols-light-table-convert-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.308 20V8.77H4V4h16v16zm1-1H19v-4.596h-6.692zm0-5.596H19V8.769h-6.692zM5 7.769h14V5H5zM4 21v-1h2.704q-1.2-.46-1.966-1.532q-.767-1.072-.767-2.43q0-1.759 1.241-2.995q1.242-1.235 3.01-1.235v1q-1.356 0-2.304.944t-.947 2.308q0 1.157.725 2.046q.725.89 1.843 1.127v-2.771h1V21z"></svg:path>`,
})
export class MaterialSymbolsLightTableConvertOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
