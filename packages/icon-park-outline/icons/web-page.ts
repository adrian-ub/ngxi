import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWebPageIcon],svg[icon-park-outline-web-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="32" x="4" y="8" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path stroke="currentColor" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></svg:path><svg:circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g>`,
})
export class IconParkOutlineWebPageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
