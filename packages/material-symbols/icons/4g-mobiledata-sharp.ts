import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols4gMobiledataSharpIcon],svg[material-symbols-4g-mobiledata-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-3H3V7h2v5h2V7h2v5h2v2H9v3zm5 0V7h9v2h-7v6h5v-2h-2.5v-2H21v6z"></svg:path>`,
})
export class MaterialSymbols4gMobiledataSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
