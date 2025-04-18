import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCreditScoreOutlineIcon],svg[material-symbols-credit-score-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h16V6H4zM2 6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v6H4v6h4.1v2H4q-.825 0-1.412-.587T2 18zm12.95 16l-4.25-4.25l1.4-1.4l2.85 2.8l5.65-5.65l1.4 1.45zM4 6v12v-4.5v2.825z"></svg:path>`,
})
export class MaterialSymbolsCreditScoreOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
