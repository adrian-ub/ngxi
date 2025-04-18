import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneInnerShadowBottomRightIcon],svg[icon-park-twotone-inner-shadow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTInnerShadowBottomRight0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" clip-rule="evenodd"></svg:path><svg:path d="M24 38a13.96 13.96 0 0 0 9.9-4.1A13.96 13.96 0 0 0 38 24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTInnerShadowBottomRight0)"></svg:path>`,
})
export class IconParkTwotoneInnerShadowBottomRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
