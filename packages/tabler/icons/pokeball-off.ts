import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPokeballOffIcon],svg[tabler-pokeball-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.04 16.048A9 9 0 0 0 7.957 3.958m-2.32 1.678a9 9 0 1 0 12.737 12.719"></svg:path><svg:path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.441a3 3 0 0 0-1.41-1.39M3 12h6m7 0h5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerPokeballOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
