import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRopeSkippingIcon],svg[icon-park-twotone-rope-skipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRopeSkipping0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 32V11a7 7 0 1 1 14 0v26a7 7 0 1 0 14 0V16"></svg:path><svg:path fill="#555" d="M41 4v12h-6V4z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 16h3m9 0h-3m0 0V4h-6v12m6 0h-6"></svg:path><svg:path fill="#555" d="M7 44V32h6v12z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32h-3m-9 0h3m0 0v12h6V32m-6 0h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRopeSkipping0)"></svg:path>`,
})
export class IconParkTwotoneRopeSkippingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
