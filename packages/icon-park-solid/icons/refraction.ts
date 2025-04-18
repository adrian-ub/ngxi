import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRefractionIcon],svg[icon-park-solid-refraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipSRefraction0" fill="currentColor" d="m24 9l16.454 28.5H7.545z"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:use href="#ipSRefraction0"></svg:use><svg:use href="#ipSRefraction0"></svg:use><svg:path d="m4 22l15.5-5m8.5-1l16-3m-14 6.5L44 21m-11.3 3L44 29"></svg:path></svg:g>`,
})
export class IconParkSolidRefractionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
