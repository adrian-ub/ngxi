import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGameConsoleOneIcon],svg[icon-park-outline-game-console-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="28" height="40" x="10" y="4" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 12h16v10H16zm0 20h8m-4 4v-8"></svg:path><svg:rect width="4" height="4" x="27" y="33" fill="currentColor" rx="2"></svg:rect><svg:rect width="4" height="4" x="30" y="26" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class IconParkOutlineGameConsoleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
