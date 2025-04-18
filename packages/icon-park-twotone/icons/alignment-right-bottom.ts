import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAlignmentRightBottomIcon],svg[icon-park-twotone-alignment-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAlignmentRightBottom0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#555" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M32 36h4m-12-6h12m-8-6h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAlignmentRightBottom0)"></svg:path>`,
})
export class IconParkTwotoneAlignmentRightBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
