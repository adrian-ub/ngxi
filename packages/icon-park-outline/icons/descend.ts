import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDescendIcon],svg[icon-park-outline-descend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m11.549 16.625l1.464-5.464s-4.794 1.152-7.1 2.857c-2.308 1.706-2.653 5.399.074 6.973s38.186 18.945 38.186 18.945l-2.768-8.794zM20 35l6 3"></svg:path><svg:path d="M29 25L26 9l-4-2l-3 13"></svg:path></svg:g>`,
})
export class IconParkOutlineDescendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
