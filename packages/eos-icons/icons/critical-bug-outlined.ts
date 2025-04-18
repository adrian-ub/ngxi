import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCriticalBugOutlinedIcon],svg[eos-icons-critical-bug-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v2h-2zm0-6h2v5h-2z"></svg:path><svg:path fill="currentColor" d="M20 8h-2.81a6 6 0 0 0-1.82-1.96L17 4.41L15.59 3l-2.17 2.17A6 6 0 0 0 12 5a6 6 0 0 0-1.41.17L8.41 3L7 4.41l1.62 1.63A6.1 6.1 0 0 0 6.81 8H4v2h2.09A6.6 6.6 0 0 0 6 11v1H4v2h2v1a6.6 6.6 0 0 0 .09 1H4v2h2.81a5.99 5.99 0 0 0 10.38 0H20v-2h-2.09a6.6 6.6 0 0 0 .09-1v-1h2v-2h-2v-1a6.6 6.6 0 0 0-.09-1H20Zm-4 4v3a4 4 0 0 1-.07.7l-.1.65l-.37.65a3.993 3.993 0 0 1-6.92 0l-.37-.64l-.1-.65A4.3 4.3 0 0 1 8 15v-4a4 4 0 0 1 .07-.7l.1-.65l.37-.65a4.1 4.1 0 0 1 1.21-1.31l.57-.39l.74-.18A3.8 3.8 0 0 1 12 7a4 4 0 0 1 .95.12l.68.16l.61.42a3.9 3.9 0 0 1 1.21 1.31l.38.65l.1.65A4 4 0 0 1 16 11Z"></svg:path>`,
})
export class EosIconsCriticalBugOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
