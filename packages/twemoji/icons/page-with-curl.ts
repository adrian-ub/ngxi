import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPageWithCurlIcon],svg[twemoji-page-with-curl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M28 32a4 4 0 0 1-4 4H4c-2.209 0-4-1.875-4-8V4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#E1E8ED" d="M31 36H4c4 0 4-8 4-8a4 4 0 0 1 4-4h20c2.209 0 4 2 4 4c0 0 .25 8-5 8"></svg:path><svg:path fill="#99AAB5" d="M24 7a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiPageWithCurlIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
