import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoundOneIcon],svg[icon-park-solid-sound-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSoundOne0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M9 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v34a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 29a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:rect width="4" height="4" x="30" y="8" fill="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 36h2m-10 0h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSoundOne0)"></svg:path>`,
})
export class IconParkSolidSoundOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
