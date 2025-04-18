import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGoldMedalIcon],svg[icon-park-twotone-gold-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGoldMedal0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M44 4H31l-4 10.3A15.02 15.02 0 0 1 37.27 22zM17 4H4l6.73 18A15.02 15.02 0 0 1 21 14.3z"></svg:path><svg:path fill="#555" d="M39 29c0 8.284-6.716 15-15 15S9 37.284 9 29c0-2.528.625-4.91 1.73-7A15.02 15.02 0 0 1 21 14.3c.97-.197 1.973-.3 3-.3s2.03.103 3 .3A15.02 15.02 0 0 1 37.27 22A14.94 14.94 0 0 1 39 29"></svg:path><svg:path d="M24 35V22l-3 1m3 12h4m-4 0h-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGoldMedal0)"></svg:path>`,
})
export class IconParkTwotoneGoldMedalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
