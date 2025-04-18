import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSoundOneIcon],svg[icon-park-sound-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M9 7C9 5.34315 10.3431 4 12 4H36C37.6569 4 39 5.34315 39 7V41C39 42.6569 37.6569 44 36 44H12C10.3431 44 9 42.6569 9 41L9 7Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 29C27.866 29 31 25.866 31 22C31 18.134 27.866 15 24 15C20.134 15 17 18.134 17 22C17 25.866 20.134 29 24 29Z"></svg:path><svg:rect width="4" height="4" x="30" y="8" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 36H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 36H21"></svg:path></svg:g>`,
})
export class IconParkSoundOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
