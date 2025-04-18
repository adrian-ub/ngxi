import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiYoutubeTvIcon],svg[cbi-youtube-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 17.19h10.59a.02.02 0 0 1 .02.02v1.27a.02.02 0 0 1-.02.02H6.7a.02.02 0 0 1-.02-.02v-1.27a.02.02 0 0 1 .02-.02M19.77 5.5H4.23a.89.89 0 0 0-.89.9v9.46a.89.89 0 0 0 .89.89h15.54a.89.89 0 0 0 .89-.89V6.4a.89.89 0 0 0-.89-.9m-9.9 8v-5l4.26 2.5z"></svg:path>`,
})
export class CbiYoutubeTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
