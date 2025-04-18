import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPostAddSharpIcon],svg[material-symbols-light-post-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.5v-1h7v1zm0 3v-1h7v1zm0 3v-1h7v1zM17.5 8V6h-2V5h2V3h1v2h2v1h-2v2zm-14 12V4h10.923v1H4.5v14h14V9.077h1V20z"></svg:path>`,
})
export class MaterialSymbolsLightPostAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
