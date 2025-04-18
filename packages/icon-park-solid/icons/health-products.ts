import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHealthProductsIcon],svg[icon-park-solid-health-products-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHealthProducts0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M33 12H15l-5 5.843v20.249L15 44h18l5-5.908v-20.25z"></svg:path><svg:path stroke="#000" d="M19 20h10"></svg:path><svg:path stroke="#fff" d="M33 12V7a3 3 0 0 0-3-3H18a3 3 0 0 0-3 3v5"></svg:path><svg:circle cx="24" cy="32" r="5" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHealthProducts0)"></svg:path>`,
})
export class IconParkSolidHealthProductsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
