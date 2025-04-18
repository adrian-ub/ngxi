import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCheckbookIcon],svg[material-symbols-checkbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h20v3h-2l-5 5H6v2h7l-4 4zm4-8h6V9H6zm7 10v-1.75l6.65-6.65l1.75 1.75L14.75 21zm9-7.25L20.25 12l.9-.9q.125-.125.275-.125t.275.125l1.2 1.2q.125.125.125.275t-.125.275z"></svg:path>`,
})
export class MaterialSymbolsCheckbookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
