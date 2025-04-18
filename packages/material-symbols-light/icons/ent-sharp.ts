import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEntSharpIcon],svg[material-symbols-light-ent-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-3.762q-1.425-1.3-2.212-2.922T4 10.981q0-3.327 2.337-5.654Q8.673 3 12 3q2.702 0 4.884 1.645t2.83 4.25L20.987 14H18v5h-4v2h-3.304l.568-5.5H14.5v-1h-3.133l.398-3.77h4.812v-1h-5.713L9.696 21z"></svg:path>`,
})
export class MaterialSymbolsLightEntSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
