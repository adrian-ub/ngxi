import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHelmetOneIcon],svg[icon-park-helmet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 11C14.6112 11 7 18.8147 7 28.4545V35H41V28.4545C41 18.8147 33.3888 11 24 11Z"></svg:path><svg:rect width="40" height="6" x="4" y="35"></svg:rect><svg:rect width="6" height="18" x="21" y="6"></svg:rect></svg:g>`,
})
export class IconParkHelmetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
