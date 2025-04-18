import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsROutlineIcon],svg[healthicons-r-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 0 1 3-3h10a9 9 0 0 1 4.306 16.905l4.377 8.753a3 3 0 0 1-5.366 2.684L24.146 27H19v9a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V26a1 1 0 0 1 1-1h6.764a1 1 0 0 1 .894.553l5.448 10.894a1 1 0 1 0 1.788-.894l-4.834-9.669a1 1 0 0 1 .525-1.376A7.003 7.003 0 0 0 26 11zm1 3a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1zm2 1v6h7a3 3 0 1 0 0-6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsROutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
