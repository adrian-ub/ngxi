import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPinEndSharpIcon],svg[material-symbols-light-pin-end-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v6.73h-1V6H4v12h9.73v1zm11.662-4.625L10.5 10.214v2.936h-1V8.5h4.65v1h-2.961l4.18 4.162zM18.577 19q-1.01 0-1.716-.707t-.707-1.716t.707-1.716t1.716-.707t1.716.707t.707 1.716t-.707 1.716t-1.716.707"></svg:path>`,
})
export class MaterialSymbolsLightPinEndSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
