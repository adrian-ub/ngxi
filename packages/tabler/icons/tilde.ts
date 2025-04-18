import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTildeIcon],svg[tabler-tilde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c0-1.657 1.592-3 3.556-3s3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3S20 13.657 20 12"></svg:path>`,
})
export class TablerTildeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
