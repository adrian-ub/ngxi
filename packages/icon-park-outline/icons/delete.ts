import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDeleteIcon],svg[icon-park-outline-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 10v34h30V10z"></svg:path><svg:path stroke-linecap="round" d="M20 20v13m8-13v13M4 10h40"></svg:path><svg:path d="m16 10l3.289-6h9.488L32 10z"></svg:path></svg:g>`,
})
export class IconParkOutlineDeleteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
