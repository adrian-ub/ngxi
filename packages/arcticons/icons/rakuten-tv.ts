import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenTvIcon],svg[arcticons-rakuten-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 18.179l23.422-7.961c4.571-1.94 6.342.256 2.714 5.158"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.642 13.882s1.13 18.829.535 21.716m7.948-16.11c1.312 1.332 6.857 18.996 6.857 18.996c.01-3.917 7.651-23.566 10.018-25.35"></svg:path>`,
})
export class ArcticonsRakutenTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
