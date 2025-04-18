import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAnchorTwoIcon],svg[icon-park-twotone-anchor-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAnchorTwo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 24H4c0 11.046 8.954 20 20 20s20-8.954 20-20h-6M24 44V14"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAnchorTwo0)"></svg:path>`,
})
export class IconParkTwotoneAnchorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
