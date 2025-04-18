import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPlaybackProgressIcon],svg[icon-park-solid-playback-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPlaybackProgress0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 5h40v26H4z"></svg:path><svg:path fill="#000" stroke="#000" d="m22 14l6 4l-6 4z"></svg:path><svg:path stroke="#fff" d="M11 40H6m11 0h25m-25 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPlaybackProgress0)"></svg:path>`,
})
export class IconParkSolidPlaybackProgressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
