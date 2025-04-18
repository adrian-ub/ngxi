import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDangoIcon],svg[twemoji-dango-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D99E82" d="M33.875 35.228c-.314 0-.628-.12-.868-.359L2.366 4.227a1.228 1.228 0 0 1 1.736-1.736l30.641 30.641a1.228 1.228 0 0 1-.868 2.096"></svg:path><svg:path fill="#FCB1E3" d="M15.254 8.627a6.752 6.752 0 1 1-13.504 0a6.752 6.752 0 0 1 13.504 0"></svg:path><svg:circle cx="15.869" cy="15.994" r="6.752" fill="#FFD983" transform="rotate(-76.714 15.87 15.994)"></svg:circle><svg:path fill="#A6D388" d="M29.987 23.359a6.754 6.754 0 0 1-13.505 0a6.752 6.752 0 0 1 13.505 0"></svg:path><svg:path fill="#D99E82" d="M33.875 35.228c-.314 0-.628-.12-.868-.359l-7.52-7.52a1.226 1.226 0 1 1 1.736-1.736l7.52 7.52a1.228 1.228 0 0 1-.868 2.095"></svg:path>`,
})
export class TwemojiDangoIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
