import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLadderOffIcon],svg[tabler-ladder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3v1m0 4v13m8-18v9m0 4v5m-8-7h6m-6-4h2m4 0h2m-6-4h6M8 18h8M3 3l18 18"></svg:path>`,
})
export class TablerLadderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
