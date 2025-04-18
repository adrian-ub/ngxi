import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChessPawnIcon],svg[material-symbols-light-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-4.27q2.373-1.672 3.235-3.307q.861-1.634 1.217-2.923H6.866v-1h2.653q-.58-.511-.925-1.213T8.25 6.75q0-1.567 1.091-2.659Q10.433 3 12 3t2.659 1.091T15.75 6.75q0 .835-.344 1.537T14.48 9.5h2.673v1h-2.567q.336 1.27 1.188 2.914T19 16.73V21z"></svg:path>`,
})
export class MaterialSymbolsLightChessPawnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
