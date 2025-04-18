import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTournamentIcon],svg[tabler-tournament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6"></svg:path><svg:path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2m3-6h4"></svg:path></svg:g>`,
})
export class TablerTournamentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
