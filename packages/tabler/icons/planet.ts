import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlanetIcon],svg[tabler-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46-5.783-.259-11.255-3.838c-5.47-3.579-9.304-7.664-8.56-9.123c.464-.91 2.926-.444 5.803.805"></svg:path><svg:path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0"></svg:path></svg:g>`,
})
export class TablerPlanetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
