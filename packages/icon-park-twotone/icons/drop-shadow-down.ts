import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDropShadowDownIcon],svg[icon-park-twotone-drop-shadow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDropShadowDown0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" d="M24 37a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 40 21a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 24 5a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 8 21a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 24 37Z" clip-rule="evenodd"></svg:path><svg:path d="M39.556 36.556A21.93 21.93 0 0 1 24 43a21.93 21.93 0 0 1-15.557-6.444"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDropShadowDown0)"></svg:path>`,
})
export class IconParkTwotoneDropShadowDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
