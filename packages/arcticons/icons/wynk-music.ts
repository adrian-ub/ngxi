import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWynkMusicIcon],svg[arcticons-wynk-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="26.5" cy="26.843" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.015" ry="5.867" transform="rotate(-75.841 26.5 26.843)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.188 28.278L37.652 6.56c-.906 3.588 6.391 1.83 5.527 5.255"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.888 17.178a10.982 10.982 0 1 0 4.734 5.774"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.207 11.935a16.266 16.266 0 1 0 5.203 3.91"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.25 5.125a21.5 21.5 0 0 0-21.5 21.5"></svg:path>`,
})
export class ArcticonsWynkMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
