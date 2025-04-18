import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContextualTokenAddOutlineSharpIcon],svg[material-symbols-light-contextual-token-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h10.654v1H4v12h16v-6.846h1V19zm3.77-3.654h5.73v-1.961H6.77zm0-4.73h5.73V8.654H6.77zm8.5 4.73h1.96v-4.192h-1.96zM4 18V6zm14-9V7h-2V6h2V4h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightContextualTokenAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
