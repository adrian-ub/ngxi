import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThpcodIcon],svg[arcticons-thpcod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m41.28 23.234l1.785 5.992a3.137 3.137 0 0 1-2.105 3.911l-26.415 7.917a3.126 3.126 0 0 1-3.9-2.111L4.631 18.775a3.137 3.137 0 0 1 2.105-3.912h0l26.415-7.916a3.126 3.126 0 0 1 3.9 2.11l1.787 5.992"></svg:path><svg:path d="m34.166 16.448l6.255-1.875a.893.893 0 0 1 1.114.604l1.928 6.467a.896.896 0 0 1-.601 1.118l-6.255 1.874"></svg:path><svg:path d="M36.588 20.182c1.246 4.181-1.124 8.584-5.294 9.834s-8.561-1.127-9.808-5.308s1.124-8.584 5.294-9.834s8.561 1.127 9.808 5.308"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.955 22.355c1.161-.033 2.13.92 2.165 2.128s-.879 2.215-2.04 2.248l-3.47.1l-.25-8.752l3.47-.1c1.161-.033 2.13.92 2.165 2.128s-.879 2.215-2.04 2.248m-1.911-5.771l.333 11.654m1.676-11.726l.333 11.654m-.431-5.811l-3.47.1"></svg:path>`,
})
export class ArcticonsThpcodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
