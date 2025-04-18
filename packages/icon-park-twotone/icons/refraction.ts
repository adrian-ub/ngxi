import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRefractionIcon],svg[icon-park-twotone-refraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipTRefraction0" fill="#555" d="m24 9l16.454 28.5H7.545z"></svg:path><svg:mask id="ipTRefraction1"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:use href="#ipTRefraction0"></svg:use><svg:use href="#ipTRefraction0"></svg:use><svg:path d="m4 22l15.5-5m8.5-1l16-3m-14 6.5L44 21m-11.3 3L44 29"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRefraction1)"></svg:path>`,
})
export class IconParkTwotoneRefractionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
