import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCheckbookOutlineIcon],svg[material-symbols-light-checkbook-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 14.5h8.289l1-1H6.5zm0-4h5v-1h-5zM4 7v10h8.289l-1 1H3V6h18v3.289h-1V7zm17.554 4.954q.106.105.106.236t-.106.237l-.785.785l-.788-.789l.784-.785q.106-.105.237-.105t.237.105zm-8.246 7.969v-.788l6.111-6.112l.789.789l-6.112 6.111zM4 7v10z"></svg:path>`,
})
export class MaterialSymbolsLightCheckbookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
