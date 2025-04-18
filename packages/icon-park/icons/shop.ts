import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShopIcon],svg[icon-park-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M4 12H44V20L42.6015 20.8391C40.3847 22.1692 37.6153 22.1692 35.3985 20.8391L34 20L32.6015 20.8391C30.3847 22.1692 27.6153 22.1692 25.3985 20.8391L24 20L22.6015 20.8391C20.3847 22.1692 17.6153 22.1692 15.3985 20.8391L14 20L12.6015 20.8391C10.3847 22.1692 7.61531 22.1692 5.39853 20.8391L4 20V12Z"></svg:path><svg:path d="M8 22.4889V44H40V22"></svg:path><svg:path d="M8 11.8222V4H40V12"></svg:path><svg:rect width="10" height="12" x="19" y="32" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkShopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
