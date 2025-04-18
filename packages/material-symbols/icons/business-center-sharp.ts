import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBusinessCenterSharpIcon],svg[material-symbols-business-center-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-6h7v2h6v-2h7v6zm9-6v-2h2v2zm-9-2V6h6V2h8v4h6v7h-7v-2H9v2zm8-7h4V4h-4z"></svg:path>`,
})
export class MaterialSymbolsBusinessCenterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
