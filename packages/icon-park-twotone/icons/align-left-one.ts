import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAlignLeftOneIcon],svg[icon-park-twotone-align-left-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAlignLeftOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M16 6h16v6H16z"></svg:path><svg:path d="M6 42V6"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M16 21h20v6H16zm0 15h26v6H16z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAlignLeftOne0)"></svg:path>`,
})
export class IconParkTwotoneAlignLeftOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
