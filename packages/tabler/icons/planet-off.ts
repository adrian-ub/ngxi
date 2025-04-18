import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlanetOffIcon],svg[tabler-planet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.816 13.58c1.956 1.825 3.157 3.449 3.184 4.445m-3.428.593c-2.098-.634-4.944-2.03-7.919-3.976c-5.47-3.579-9.304-7.664-8.56-9.123c.32-.628 1.591-.6 3.294-.113"></svg:path><svg:path d="M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581-2.425A7 7 0 0 0 9.474 5.47M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerPlanetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
