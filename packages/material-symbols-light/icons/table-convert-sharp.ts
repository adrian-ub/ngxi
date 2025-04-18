import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableConvertSharpIcon],svg[material-symbols-light-table-convert-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 14.885H20V20h-7.5zm0-1V8.769H20v5.116zM4 7.769V4h16v3.77zM4 21v-1h2.704q-1.2-.46-1.966-1.532q-.767-1.072-.767-2.43q0-1.759 1.241-2.995q1.242-1.235 3.01-1.235v1q-1.356 0-2.304.944t-.947 2.308q0 1.157.725 2.046q.725.89 1.843 1.127v-2.771h1V21z"></svg:path>`,
})
export class MaterialSymbolsLightTableConvertSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
