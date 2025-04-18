import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSubwayIcon],svg[icon-park-twotone-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSubway0"><svg:g fill="none"><svg:rect width="32" height="26" x="8" y="6" stroke="#fff" stroke-width="4" rx="2"></svg:rect><svg:circle cx="14" cy="27" r="2" fill="#fff"></svg:circle><svg:circle cx="34" cy="27" r="2" fill="#fff"></svg:circle><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 12h20v10H14z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m32 32l8 9m-23-9l-9 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSubway0)"></svg:path>`,
})
export class IconParkTwotoneSubwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
