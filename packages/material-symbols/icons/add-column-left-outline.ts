import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddColumnLeftOutlineIcon],svg[material-symbols-add-column-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V5h-6v14zM4 21v-4h2v2h6V5H6v2H4V3h18v18zm10-9h-2zM4 15v-2H2v-2h2V9h2v2h2v2H6v2z"></svg:path>`,
})
export class MaterialSymbolsAddColumnLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
