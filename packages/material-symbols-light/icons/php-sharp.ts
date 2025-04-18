import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhpSharpIcon],svg[material-symbols-light-php-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.423 14.692V9.308h4.385v3.461h-3.5v1.923zm6.577 0V9.308h.885v2H13.5v-2h.885v5.384H13.5v-2.5h-2.615v2.5zm6.73 0V9.308h4.385v3.461h-3.5v1.923zM4.309 11.885h2.615V10.23H4.308zm13.308 0h2.615V10.23h-2.616z"></svg:path>`,
})
export class MaterialSymbolsLightPhpSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
