import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSafeRetrievalIcon],svg[icon-park-safe-retrieval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 9.12739L24.0082 4L41 9.12739V19.6424C41 30.6945 34.153 40.5063 24.0025 44C13.8492 40.5064 7 30.6923 7 19.6376V9.12739Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 30C27.866 30 31 26.866 31 23C31 19.134 27.866 16 24 16C20.134 16 17 19.134 17 23C17 26.866 20.134 30 24 30Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 29L35 36"></svg:path><svg:path stroke="#000" d="M41 19.6426C41 30.6946 34.153 40.5065 24.0024 44.0002"></svg:path></svg:g>`,
})
export class IconParkSafeRetrievalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
