import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBalanceIcon],svg[icon-park-solid-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBalance0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M35 25a32.23 32.23 0 0 0-22 0l-1-11c7-3 17-3 24 0z"></svg:path><svg:path stroke="#000" d="m24 23l-3-5"></svg:path><svg:path stroke="#fff" d="M42 39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3z"></svg:path><svg:path stroke="#fff" d="M29 23.455a32.2 32.2 0 0 0-10 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBalance0)"></svg:path>`,
})
export class IconParkSolidBalanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
