import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRailwayIcon],svg[icon-park-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M12 6C12 4.89543 12.8954 4 14 4H34C35.1046 4 36 4.89543 36 6V30C36 31.1046 35.1046 32 34 32H14C12.8954 32 12 31.1046 12 30V6Z"></svg:path><svg:circle cx="18" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="30" cy="26" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 20L36 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 38H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 44H30"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M17 32L11 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M31 32L37 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 15V25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 15V25"></svg:path></svg:g>`,
})
export class IconParkRailwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
