import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDocsSharpIcon],svg[material-symbols-light-docs-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.385 12.308h7.23v-1h-7.23zm0 2.769h7.23v-1h-7.23zm0 2.77h4.23v-1h-4.23zM5 21V3h9.5L19 7.5V21zm9-13h4l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLightDocsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
