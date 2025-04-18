import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPediatricsOutlineSharpIcon],svg[material-symbols-pediatrics-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7V5h4V2h2v3h4v2zm0 15V11q0-1.25.875-2.125T10 8h4q1.25 0 2.125.875T17 11v11zm2-2h6v-9q0-.425-.288-.712T14 10h-4q-.425 0-.712.288T9 11v1h3v2H9v2h3v2H9zm0 0V10z"></svg:path>`,
})
export class MaterialSymbolsPediatricsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
