import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDeleteIcon],svg[icon-park-solid-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDelete0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M9 10v34h30V10z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 20v13m8-13v13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 10h40"></svg:path><svg:path fill="#fff" stroke="#fff" d="m16 10l3.289-6h9.488L32 10z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDelete0)"></svg:path>`,
})
export class IconParkSolidDeleteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
