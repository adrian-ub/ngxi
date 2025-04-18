import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMoreSharpIcon],svg[material-symbols-more-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 20l-6-8l6-8h14v16zm1-7h2v-2H9zm3.5 0h2v-2h-2zm3.5 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsMoreSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
