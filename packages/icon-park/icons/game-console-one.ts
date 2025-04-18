import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGameConsoleOneIcon],svg[icon-park-game-console-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="28" height="40" x="10" y="4" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:rect width="16" height="10" x="16" y="12" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32L24 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 36V28"></svg:path><svg:rect width="4" height="4" x="27" y="33" fill="#000" rx="2"></svg:rect><svg:rect width="4" height="4" x="30" y="26" fill="#000" rx="2"></svg:rect></svg:g>`,
})
export class IconParkGameConsoleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
