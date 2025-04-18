import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDropShadowLeftIcon],svg[icon-park-twotone-drop-shadow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDropShadowLeft0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" d="M27 40a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 43 24a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 27 8a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 11 24a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 27 40Z" clip-rule="evenodd"></svg:path><svg:path d="M11.444 8.444A21.93 21.93 0 0 0 5 24a21.93 21.93 0 0 0 6.444 15.556"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDropShadowLeft0)"></svg:path>`,
})
export class IconParkTwotoneDropShadowLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
