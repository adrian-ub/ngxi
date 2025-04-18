import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackOutlineSharpIcon],svg[material-symbols-light-stack-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 14v1H3V3h12v3.616h-1V4H4v10zM9 21V9h12v12zm1-1h10V10H10zm5-5"></svg:path>`,
})
export class MaterialSymbolsLightStackOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
