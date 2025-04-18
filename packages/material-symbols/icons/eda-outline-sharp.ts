import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdaOutlineSharpIcon],svg[material-symbols-eda-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12V2h2v10zm4 0V1h2v11zm4 4.075V3h2v11.9zM5 21h9.075l4.85-4.85l-7.175 4.175L8.5 16H5zm-2 2v-9h6.5l2.75 3.675L17 14.9l3.4-1.95l2.625 1.95l-8.1 8.1zm2-9H3V4h2zm0-2h10zm0 9h9.075z"></svg:path>`,
})
export class MaterialSymbolsEdaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
