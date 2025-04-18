import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStatMinus3RoundedIcon],svg[material-symbols-light-stat-minus-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.83l4.246-4.24q.14-.14.342-.152t.366.153q.16.159.16.353t-.16.354l-4.221 4.221q-.306.306-.733.306t-.733-.306l-4.22-4.221q-.141-.14-.154-.341t.153-.367q.16-.16.354-.16t.354.16zm0-5.95l4.246-4.24q.14-.14.342-.152t.366.153q.16.159.16.353t-.16.354l-4.221 4.221q-.306.306-.733.306t-.733-.306l-4.22-4.221q-.141-.14-.154-.341t.153-.366q.16-.16.354-.16t.354.16zm0-5.95l4.246-4.24q.14-.14.342-.152t.366.153q.16.159.16.353t-.16.354l-4.221 4.221q-.306.306-.733.306t-.733-.306l-4.22-4.221q-.141-.14-.154-.341t.153-.367q.16-.16.354-.16t.354.16z"></svg:path>`,
})
export class MaterialSymbolsLightStatMinus3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
