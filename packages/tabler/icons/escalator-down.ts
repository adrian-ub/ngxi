import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEscalatorDownIcon],svg[tabler-escalator-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 7h2.733a2 2 0 0 1 1.337.513L18 16h1.5a2.5 2.5 0 1 1 0 5h-2.733a2 2 0 0 1-1.337-.513L6 12H4.5a2.5 2.5 0 1 1 0-5M18 3v7m-3-3l3 3l3-3"></svg:path>`,
})
export class TablerEscalatorDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
