import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneReelIcon],svg[icon-park-twotone-reel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTReel0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 10L14 20m20-3L14 29m20-3L15 38"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M9 4h30v6H9zm0 34h30v6H9z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 10v28"></svg:path><svg:path d="M34 10v28"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTReel0)"></svg:path>`,
})
export class IconParkTwotoneReelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
