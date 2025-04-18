import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGobletCrackingIcon],svg[icon-park-twotone-goblet-cracking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGobletCracking0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 44H13m10-16v16"></svg:path><svg:path fill="#555" d="M35 16c0 6.5-5.373 12-12 12s-12-5.373-12-12c0-6.5 4-12 4-12h16s4 5.5 4 12"></svg:path><svg:path d="m23 4l-2 6l4 1l-2 6M15 4h16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGobletCracking0)"></svg:path>`,
})
export class IconParkTwotoneGobletCrackingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
