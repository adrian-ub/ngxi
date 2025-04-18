import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestFoundSavingsSharpIcon],svg[material-symbols-nest-found-savings-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l-3-3H3V2h18v18h-6zm0-7q2.15 0 3.575-1.5T17 11V6h-5Q9.975 6 8.488 7.425T7 11q0 .75.213 1.425t.587 1.25l-1.1 1.1l1.35 1.35l1.025-1q.675.425 1.4.65T12 16m-2.75-3.775l3.3-3.3l1.425 1.4l-3.4 3.325z"></svg:path>`,
})
export class MaterialSymbolsNestFoundSavingsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
