import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPotentiometerIcon],svg[openmoji-potentiometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M21 30h6v12h-6z"></svg:path><svg:circle cx="41" cy="36" r="15" fill="#FFF"></svg:circle><svg:path fill="#D0CFCE" d="M30.4 46.6C33.1 49.3 36.9 51 41 51c8.3 0 15-6.7 15-15c0-3.6-1.3-6.9-3.4-9.5c-.3-.4-.7-.8-1.1-1.2"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M21 32h-5m5 4h-5m5 4h-5m11 1.4v.6h-6V30h6v.6"></svg:path><svg:circle cx="41" cy="36" r="15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="41" cy="36" r="4"></svg:circle><svg:path fill="#E27022" d="M20.005 30.99v2.02h-4.04c-.606 0-1.01-.505-1.01-1.01s.404-1.01 1.01-1.01zm0 4v2.02h-4.04c-.606 0-1.01-.505-1.01-1.01s.404-1.01 1.01-1.01zm0 4v2.02h-4.04c-.606 0-1.01-.505-1.01-1.01s.404-1.01 1.01-1.01z"></svg:path>`,
})
export class OpenmojiPotentiometerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
