import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPostAddSharpIcon],svg[material-symbols-post-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11V9h8v2zm0 3v-2h8v2zm0 3v-2h8v2zm9-8V7h-2V5h2V3h2v2h2v2h-2v2zM3 21V3h11v2H5v14h14v-9h2v11z"></svg:path>`,
})
export class MaterialSymbolsPostAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
