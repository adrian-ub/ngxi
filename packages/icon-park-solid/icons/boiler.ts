import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBoilerIcon],svg[icon-park-solid-boiler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="8" x="5" y="6" fill="currentColor" rx="2"></svg:rect><svg:path d="M8 14v26a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14"></svg:path><svg:path fill="currentColor" stroke-linecap="round" d="M31 29.067C31 32.896 27.866 36 24 36s-7-3.104-7-6.933c0-3.83 2.692-5.334 3.77-9.067c4.307 1.867 4.307 7.467 4.307 7.467s1.077-3.2 4.308-4C29.654 26.4 31 27.432 31 29.067"></svg:path></svg:g>`,
})
export class IconParkSolidBoilerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
