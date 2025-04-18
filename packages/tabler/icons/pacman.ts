import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPacmanIcon],svg[tabler-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.636 5.636a9 9 0 0 1 13.397.747L13.414 12l5.619 5.617A9 9 0 1 1 5.636 5.636"></svg:path><svg:circle cx="11.5" cy="7.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class TablerPacmanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
