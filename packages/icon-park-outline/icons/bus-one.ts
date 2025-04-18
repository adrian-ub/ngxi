import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBusOneIcon],svg[icon-park-outline-bus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="34" x="8" y="5" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 39v4m20-4v4"></svg:path><svg:circle cx="34" cy="33" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="33" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 23h32M8 21v4m32-4v4M18 13h12"></svg:path></svg:g>`,
})
export class IconParkOutlineBusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
