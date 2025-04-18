import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGameConsoleIcon],svg[icon-park-outline-game-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="28" height="40" x="10" y="4" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 34h8m-4-4v8"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M16 10h16v9H16z"></svg:path><svg:circle cx="31" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="38" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineGameConsoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
