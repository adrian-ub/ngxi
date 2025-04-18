import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFountainIcon],svg[tabler-fountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 16v-5a2 2 0 1 0-4 0m10 5v-5a2 2 0 1 1 4 0"></svg:path><svg:path d="M12 16V6a3 3 0 0 1 6 0M6 6a3 3 0 0 1 6 0M3 16h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class TablerFountainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
