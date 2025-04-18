import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLoginIcon],svg[mage-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10.973 2.755h5.136a4.92 4.92 0 0 1 5.136 4.623v9.244a4.92 4.92 0 0 1-5.136 4.623h-5.136"></svg:path><svg:path stroke-miterlimit="10" d="M16.109 12H2.755"></svg:path><svg:path stroke-linejoin="round" d="m11.397 17.136l4.404-4.404a1.04 1.04 0 0 0 0-1.464l-4.405-4.404"></svg:path></svg:g>`,
})
export class MageLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
