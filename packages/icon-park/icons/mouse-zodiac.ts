import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMouseZodiacIcon],svg[icon-park-mouse-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 35H4C4 27 9 17 14 17L16 26"></svg:path><svg:path d="M28 35.0001C28 30 30 26.9893 37 27"></svg:path><svg:path d="M44 28.5374C45 33.511 42 34.9999 40 33.9999C38 32.9999 38.5 28.0004 37 24C33.8599 15.6254 22 13.9997 15 21.0003"></svg:path></svg:g>`,
})
export class IconParkMouseZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
