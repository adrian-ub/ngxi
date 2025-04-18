import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUpCIcon],svg[icon-park-outline-up-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipOUpC0" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:use href="#ipOUpC0" clip-rule="evenodd"></svg:use><svg:use href="#ipOUpC0" stroke-linejoin="round"></svg:use><svg:path stroke-linecap="round" stroke-linejoin="round" d="m33 27l-9-9l-9 9"></svg:path></svg:g>`,
})
export class IconParkOutlineUpCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
