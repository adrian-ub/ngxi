import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPlugOneIcon],svg[icon-park-solid-plug-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPlugOne0"><svg:g fill="none" stroke-width="4"><svg:rect width="24" height="24" x="12" y="12" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 36v5a3 3 0 0 1-3 3H8m12-32V4m8 8V4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22 24h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPlugOne0)"></svg:path>`,
})
export class IconParkSolidPlugOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
