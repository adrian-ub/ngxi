import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAnchorIcon],svg[icon-park-twotone-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAnchor0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" d="M14 8h20M14 8h20M14 40h20"></svg:path><svg:rect width="8" height="8" x="36" y="4" fill="#555" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="4" y="4" fill="#555" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="36" y="36" fill="#555" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="4" y="36" fill="#555" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M40 14v20M8 14v20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAnchor0)"></svg:path>`,
})
export class IconParkTwotoneAnchorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
