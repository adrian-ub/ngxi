import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationSocialHackerNewsIcon],svg[foundation-social-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79 14H21a7 7 0 0 0-7 7v58a7 7 0 0 0 7 7h58a7 7 0 0 0 7-7V21a7 7 0 0 0-7-7M53.134 52.654V69.83h-5.267V52.714L35.12 29.494h5.925l5.685 11.132c1.556 3.051 2.752 5.505 4.01 8.318h.12c1.137-2.634 2.514-5.268 4.07-8.318l5.805-11.132h5.924z"></svg:path>`,
})
export class FoundationSocialHackerNewsIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
