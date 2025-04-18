import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJavascriptSharpIcon],svg[material-symbols-javascript-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15v-2.5h1.5v1H9V9h1.5v6zm6 0v-2h1.5v.5h2v-1H12V9h5v2h-1.5v-.5h-2v1H17V15z"></svg:path>`,
})
export class MaterialSymbolsJavascriptSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
