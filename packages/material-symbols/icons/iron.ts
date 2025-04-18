import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIronIcon],svg[material-symbols-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18v-3q0-1.65 1.175-2.825T6 11h9v-1q0-.425-.288-.712T14 9h-4q-.425 0-.712.288T9 10H7q0-1.25.875-2.125T10 7h4q1.25 0 2.125.875T17 10v4q.425 0 .713-.288T18 13V9q0-1.25.875-2.125T21 6h1v2h-1q-.425 0-.712.288T20 9v4q0 1.25-.875 2.125T17 16v2z"></svg:path>`,
})
export class MaterialSymbolsIronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
