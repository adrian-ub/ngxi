import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineOneToManyIcon],svg[icon-park-outline-one-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M42 7H6a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 20.58L15 18v12m14 0V18l8 12V18"></svg:path><svg:path stroke-linecap="round" d="M22 20v1m0 6v1"></svg:path></svg:g>`,
})
export class IconParkOutlineOneToManyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
