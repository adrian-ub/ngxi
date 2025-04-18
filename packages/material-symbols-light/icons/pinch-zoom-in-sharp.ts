import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPinchZoomInSharpIcon],svg[material-symbols-light-pinch-zoom-in-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.858 12.385l-.627-.627L4.483 8.5H1.616v-.885H6V12h-.885V9.133zM7.616 6V1.616H8.5v2.873l3.252-3.258l.633.633l-3.258 3.252H12V6zm5.42 15.77L7.37 16.115l.922-.895l3.44.858v-8.81h1v7.77h1.827v-4.27h1v4.27h1.846v-3.27h1v3.27h1.827v-1.27h1v8z"></svg:path>`,
})
export class MaterialSymbolsLightPinchZoomInSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
