import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinshareIcon],svg[arcticons-linshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.158 18.358c2.362-11.687 16.079-8.825 17.166-.974c3.678.451 5.166 2.448 5.812 5.04c10.282 1.09 9.129 14.973.672 15.05H12.52c-10.296-.205-11.302-16.771.638-19.116"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.363 30.015l-1.58 1.68a2.487 2.487 0 0 1-3.392-3.628l2.419-2.587a2.444 2.444 0 0 1 3.729.37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.389 27.294a2.355 2.355 0 0 0 3.796-.1l2.351-2.453c1.978-2.634-1.665-5.326-3.426-3.292l-1.445 1.444"></svg:path>`,
})
export class ArcticonsLinshareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
