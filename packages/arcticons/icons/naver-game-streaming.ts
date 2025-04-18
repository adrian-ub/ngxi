import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNaverGameStreamingIcon],svg[arcticons-naver-game-streaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.2 5.5h13.71l-3.432 5.386H42.5L26.744 32.407h13.7V42.5H5.5l16.444-22.2h-13.7z"></svg:path>`,
})
export class ArcticonsNaverGameStreamingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
