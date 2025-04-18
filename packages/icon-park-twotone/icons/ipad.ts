import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneIpadIcon],svg[icon-park-twotone-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTIpad0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="30" height="38" x="9" y="5" fill="#555" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 36h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTIpad0)"></svg:path>`,
})
export class IconParkTwotoneIpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
