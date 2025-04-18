import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneIntercomIcon],svg[icon-park-twotone-intercom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTIntercom0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M13 14a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11l-2 6v10a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V31l-2-6z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 11V4m9 7V7m0 12h-8m6 7h-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTIntercom0)"></svg:path>`,
})
export class IconParkTwotoneIntercomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
