import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSearchCheck2RoundedIcon],svg[material-symbols-search-check-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.95 10.7L7.525 9.3q-.3-.3-.7-.3t-.7.3t-.312.7t.287.7l2.125 2.125q.3.3.713.3t.712-.3L13.9 8.6q.3-.3.3-.713t-.3-.712t-.712-.3t-.713.3zM10 18q-3.35 0-5.675-2.325T2 10t2.325-5.675T10 2t5.675 2.325T18 10q0 1.4-.437 2.638T16.325 14.9l4.975 4.975q.3.3.3.713t-.3.712t-.712.3t-.713-.3L14.9 16.325q-1.025.8-2.262 1.238T10 18"></svg:path>`,
})
export class MaterialSymbolsSearchCheck2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
