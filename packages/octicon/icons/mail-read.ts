import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconMailReadIcon],svg[octicon-mail-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 5H4V4h2v1zm3 1H4v1h5V6zm5-.48V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5.52c0-.33.16-.63.42-.81L2 3.58V3c0-.55.45-1 1-1h1.2L7 0l2.8 2H11c.55 0 1 .45 1 1v.58l1.58 1.13c.27.19.42.48.42.81zM3 7.5L7 10l4-2.5V3H3v4.5zm-2 6l4.5-3l-4.5-3v6zm11 .5l-5-3l-5 3h10zm1-6.5l-4.5 3l4.5 3v-6z" fill="currentColor"></svg:path>`,
})
export class OcticonMailReadIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
