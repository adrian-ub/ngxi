import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNewLabelOutlineSharpIcon],svg[material-symbols-new-label-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20v-2h3l4.5-6L15 6H4v5H2V4h14l6 8l-6 8zm-7 1v-3H2v-2h3v-3h2v3h3v2H7v3z"></svg:path>`,
})
export class MaterialSymbolsNewLabelOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
