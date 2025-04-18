import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHddIcon],svg[icon-park-outline-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="30" height="40" x="9" y="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="32" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="32" cy="38" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="38" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30a8 8 0 1 0-8-8m8 0l-6 6"></svg:path></svg:g>`,
})
export class IconParkOutlineHddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
