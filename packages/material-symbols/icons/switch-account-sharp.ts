import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwitchAccountSharpIcon],svg[material-symbols-switch-account-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11q1.25 0 2.125-.875T17 8t-.875-2.125T14 5t-2.125.875T11 8t.875 2.125T14 11m-8 7V2h16v16zm-4 4V6h2v14h14v2zm6-6h12q-1.05-1.425-2.637-2.212T14 13t-3.363.788T8 16"></svg:path>`,
})
export class MaterialSymbolsSwitchAccountSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
