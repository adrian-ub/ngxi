import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneContrastViewIcon],svg[icon-park-twotone-contrast-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTContrastView0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M7 7h17v34H7z"></svg:path><svg:path stroke-linecap="round" d="M24 7h4m5 0h2m-2 34h2m6-34v2m0 6v2m0 6v2m0 6v2m0 6v2m-14 0h-3m0-37v40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTContrastView0)"></svg:path>`,
})
export class IconParkTwotoneContrastViewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
