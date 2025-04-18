import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPlaybackProgressIcon],svg[icon-park-playback-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="26" x="4" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M22 14L28 18L22 22V14Z"></svg:path><svg:path stroke="#000" d="M11 40H6"></svg:path><svg:path stroke="#000" d="M17 40H42"></svg:path><svg:path stroke="#000" d="M17 40C17 41.6569 15.6569 43 14 43C12.3431 43 11 41.6569 11 40C11 38.3431 12.3431 37 14 37C15.6569 37 17 38.3431 17 40Z"></svg:path></svg:g>`,
})
export class IconParkPlaybackProgressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
