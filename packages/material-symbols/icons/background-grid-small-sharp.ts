import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBackgroundGridSmallSharpIcon],svg[material-symbols-background-grid-small-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h3v-3H3zm5 0h3v-3H8zm5 0h3v-3h-3zm5 0h3v-3h-3zM3 6h3V3H3zm0 5h3V8H3zm0 5h3v-3H3zM8 6h3V3H8zm0 5h3V8H8zm0 5h3v-3H8zm5-10h3V3h-3zm0 5h3V8h-3zm0 5h3v-3h-3zm5-10h3V3h-3zm0 5h3V8h-3zm0 5h3v-3h-3z"></svg:path>`,
})
export class MaterialSymbolsBackgroundGridSmallSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
