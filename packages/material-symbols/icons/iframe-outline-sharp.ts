import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIframeOutlineSharpIcon],svg[material-symbols-iframe-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 13.5h5v-2h-5zM10 15v-5h8v5zm-8 5V4h20v16zm2-2h16V8H4z"></svg:path>`,
})
export class MaterialSymbolsIframeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
