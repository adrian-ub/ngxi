import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWebPageIcon],svg[icon-park-twotone-web-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWebPage0"><svg:g fill="none"><svg:rect width="40" height="32" x="4" y="8" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path fill="#555" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWebPage0)"></svg:path>`,
})
export class IconParkTwotoneWebPageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
