import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBasketballOneIcon],svg[icon-park-twotone-basketball-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBasketballOne0"><svg:g fill="none"><svg:path fill="#555" d="M18 24c0-6.624 5.376-12 12-12s12 5.376 12 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M18 24c0-6.624 5.376-12 12-12s12 5.376 12 12M12 4H4v32h8zm0 20h32m-26 0l2 4.5c2 5 1.9 10.4 0 15.5m21-20l-2 4.5c-2 5-1.91 10.4 0 15.5M21.22 32h16.56m-16.09 8h15.63m-7.82 0V24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBasketballOne0)"></svg:path>`,
})
export class IconParkTwotoneBasketballOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
