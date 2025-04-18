import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRefractionIcon],svg[icon-park-refraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M23.9999 9L40.4544 37.5H7.54541L23.9999 9Z"></svg:path><svg:path fill="#2F88FF" d="M23.9999 9L40.4544 37.5H7.54541L23.9999 9Z"></svg:path><svg:path d="M4 22L19.5 17"></svg:path><svg:path d="M28 16L44 13"></svg:path><svg:path d="M30 19.5L44 21"></svg:path><svg:path d="M32.7002 24L44.0002 29"></svg:path></svg:g>`,
})
export class IconParkRefractionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
