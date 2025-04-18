import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCombatProvidenceAnalysisSystemIcon],svg[arcticons-combat-providence-analysis-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24L24 42.5L42.5 24L24 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.125 28.625L24 14.75L33.25 24L24 33.25l4.625 4.625M24 24l-4.625 4.625"></svg:path>`,
})
export class ArcticonsCombatProvidenceAnalysisSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
