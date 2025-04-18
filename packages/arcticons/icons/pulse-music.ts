import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPulseMusicIcon],svg[arcticons-pulse-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.21 9.76V9.7H4.5v6.57L12.68 24c-.08-.61 0-7.73 0-7.73H28.8a7.21 7.21 0 0 1 0 14.41c-5.55 0-9.18-1.72-9.18-6.68h-6.94c0 9.2 5.3 14.3 16.52 14.3a14.29 14.29 0 0 0 1-28.54Z"></svg:path>`,
})
export class ArcticonsPulseMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
