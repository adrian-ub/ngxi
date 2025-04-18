import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShoeOffIcon],svg[tabler-shoe-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13.846 9.868l4.08.972A4 4 0 0 1 21 14.73V17m-3 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2"></svg:path><svg:path d="M8 18v-1a4 4 0 0 0-4-4H3m7-1l.663-1.327M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerShoeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
