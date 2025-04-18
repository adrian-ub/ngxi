import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEmailSearchIcon],svg[icon-park-twotone-email-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEmailSearch0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24V9H4v30h20"></svg:path><svg:circle cx="36" cy="34" r="5" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m40 37l4 3M4 9l20 15L44 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEmailSearch0)"></svg:path>`,
})
export class IconParkTwotoneEmailSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
