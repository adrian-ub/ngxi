import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUDiskIcon],svg[icon-park-u-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 12V4H18V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M13 12.3735C13 12.1672 13.1672 12 13.3735 12H34.6265C34.8328 12 35 12.1672 35 12.3735V33C35 39.0751 30.0751 44 24 44C17.9249 44 13 39.0751 13 33V12.3735Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 21L28 21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 29L28 29"></svg:path></svg:g>`,
})
export class IconParkUDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
