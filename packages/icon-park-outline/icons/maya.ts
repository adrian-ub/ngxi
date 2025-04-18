import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMayaIcon],svg[icon-park-outline-maya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M4 34h40v8H4zm3-7h34v7H7zm3-6h28v6H10zm3-6h22v6H13zm7-8h8v8h-8z"></svg:path><svg:path d="m20 15l-6 27m14-27l6 27"></svg:path></svg:g>`,
})
export class IconParkOutlineMayaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
