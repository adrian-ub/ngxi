import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOpenInNewSharpIcon],svg[material-symbols-open-in-new-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h9v2H5v14h14v-7h2v9zm6.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"></svg:path>`,
})
export class MaterialSymbolsOpenInNewSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
