import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBalanceOneIcon],svg[icon-park-outline-balance-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M35 25a32.23 32.23 0 0 0-22 0l-1-11c7-3 17-3 24 0zm-11-2l-3-5"></svg:path><svg:path d="M42 39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3z"></svg:path><svg:path d="M29 23.455a32.2 32.2 0 0 0-10 0"></svg:path></svg:g>`,
})
export class IconParkOutlineBalanceOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
