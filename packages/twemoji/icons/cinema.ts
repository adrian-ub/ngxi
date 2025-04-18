import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCinemaIcon],svg[twemoji-cinema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M21 11a6 6 0 1 1-12 0a6 6 0 0 1 12 0m10.999 2a5 5 0 1 1-10.001-.001A5 5 0 0 1 31.999 13"></svg:path><svg:path fill="#FFF" d="M30 20a4 4 0 0 0-4-4H15a4 4 0 0 0-4 4l-6-4H4v13h1l6-4v2a4 4 0 0 0 4 4h11a4 4 0 0 0 4-4z"></svg:path>`,
})
export class TwemojiCinemaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
