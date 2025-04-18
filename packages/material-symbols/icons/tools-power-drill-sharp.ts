import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsToolsPowerDrillSharpIcon],svg[material-symbols-tools-power-drill-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10h6V8.5H6zm0-2.5h6V6H6zM17 11V5h2l1 1v1h3v2h-3v1l-1 1zM6 15.5V13q-1.65 0-2.825-1.175T2 9V7q0-1.65 1.175-2.825T6 3h10v10h-4v2.5zM4 21v-4.5h10V21z"></svg:path>`,
})
export class MaterialSymbolsToolsPowerDrillSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
