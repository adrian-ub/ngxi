import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDividingLineIcon],svg[icon-park-dividing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 24H43"></svg:path><svg:path d="M21 38H27"></svg:path><svg:path d="M37 38H43"></svg:path><svg:path d="M21 10H27"></svg:path><svg:path d="M5 38H11"></svg:path><svg:path d="M5 10H11"></svg:path><svg:path d="M37 10H43"></svg:path></svg:g>`,
})
export class IconParkDividingLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
