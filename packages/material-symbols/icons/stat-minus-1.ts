import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStatMinus1Icon],svg[material-symbols-stat-minus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.375l-6-6l1.4-1.4L12 12.55l4.6-4.575l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsStatMinus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
