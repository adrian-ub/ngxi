import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMenuUnfoldOneIcon],svg[icon-park-twotone-menu-unfold-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMenuUnfoldOne0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 10.5h32m-16 9h16m-16 9h16m-32 9h32"></svg:path><svg:path fill="#555" d="m16 19l-8 5l8 5z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMenuUnfoldOne0)"></svg:path>`,
})
export class IconParkTwotoneMenuUnfoldOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
