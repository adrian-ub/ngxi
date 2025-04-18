import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols3gMobiledataSharpIcon],svg[material-symbols-3g-mobiledata-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v-2h5v-2H3v-2h5V9H3V7h7v10zm18-6v6h-9V7h9v2h-7v6h5v-2h-2.5v-2z"></svg:path>`,
})
export class MaterialSymbols3gMobiledataSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
