import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChairSharpIcon],svg[material-symbols-chair-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-2H1v-9h4v5h14v-5h4v9h-3v2h-2v-2H6v2zm3-8V8H4V3h16v5h-3v5z"></svg:path>`,
})
export class MaterialSymbolsChairSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
