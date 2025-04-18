import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTransferIcon],svg[icon-park-twotone-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTransfer0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 28.392v7.015C37 39.048 34.089 42 30.497 42s-6.503-2.952-6.503-6.593l.012-22.264C24.006 9.198 21.095 6 17.503 6S11 9.198 11 13.143v15.25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m43 31l-6-6l-6 6"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 10.727C43 15.182 37 19 37 19s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.15 6.15 0 0 1 37 5a6.15 6.15 0 0 1 4.243 1.677A5.6 5.6 0 0 1 43 10.727m-26 24C17 39.182 11 43 11 43s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.15 6.15 0 0 1 11 29a6.15 6.15 0 0 1 4.243 1.677A5.6 5.6 0 0 1 17 34.728"></svg:path><svg:circle cx="37" cy="11" r="2" fill="#fff"></svg:circle><svg:circle cx="11" cy="35" r="2" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTransfer0)"></svg:path>`,
})
export class IconParkTwotoneTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
