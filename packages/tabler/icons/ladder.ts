import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLadderIcon],svg[tabler-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3v18m8-18v18m-8-7h8m-8-4h8M8 6h8M8 18h8"></svg:path>`,
})
export class TablerLadderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
