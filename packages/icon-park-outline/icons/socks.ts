import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSocksIcon],svg[icon-park-outline-socks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 18c-3 0-8 0-10 5s.5 9.5 3 12M18 10h22"></svg:path><svg:path d="M20 4h18a2 2 0 0 1 2 2v18.288c0 3.432-1.6 6.667-4.336 8.74C32.022 35.788 27.088 39.508 25 41c-3.5 2.5-10 5-15 0c-4.999-5-3.749-11.557.001-15s8-6.848 8-6.848V6a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class IconParkOutlineSocksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
