import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCheckbookOutlineIcon],svg[material-symbols-checkbook-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h7l2-2H6zm0-4h6V9H6zM4 7v10h7l-2 2H2V5h20v3h-2V7zm18.9 5.3q.125.125.125.275t-.125.275l-.9.9L20.25 12l.9-.9q.125-.125.275-.125t.275.125zM13 21v-1.75l6.65-6.65l1.75 1.75L14.75 21zM4 7v10z"></svg:path>`,
})
export class MaterialSymbolsCheckbookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
