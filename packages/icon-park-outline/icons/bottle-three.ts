import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBottleThreeIcon],svg[icon-park-outline-bottle-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.188 10h5.625L33 21.18V44H15V21.18zM20 4h8v6h-8z"></svg:path><svg:rect width="6" height="12" x="21" y="23" rx="3"></svg:rect></svg:g>`,
})
export class IconParkOutlineBottleThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
