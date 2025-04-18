import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGameConsoleOneIcon],svg[icon-park-twotone-game-console-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGameConsoleOne0"><svg:g fill="none"><svg:rect width="28" height="40" x="10" y="4" stroke="#fff" stroke-width="4" rx="2"></svg:rect><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 12h16v10H16z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32h8m-4 4v-8"></svg:path><svg:rect width="4" height="4" x="27" y="33" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="30" y="26" fill="#fff" rx="2"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGameConsoleOne0)"></svg:path>`,
})
export class IconParkTwotoneGameConsoleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
