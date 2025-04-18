import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGameConsoleIcon],svg[icon-park-twotone-game-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGameConsole0"><svg:g fill="none"><svg:rect width="28" height="40" x="10" y="4" stroke="#fff" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 34h8m-4-4v8"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M16 10h16v9H16z"></svg:path><svg:circle cx="31" cy="30" r="2" fill="#fff"></svg:circle><svg:circle cx="31" cy="38" r="2" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGameConsole0)"></svg:path>`,
})
export class IconParkTwotoneGameConsoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
