import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRoadSignBothIcon],svg[icon-park-twotone-road-sign-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRoadSignBoth0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M10 8v8h28l4-4l-4-4zm28 15v8H10l-4-4l4-4z"></svg:path><svg:path stroke-linecap="round" d="M24 31v13m0-28v7m0-19v4m-5 36h10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRoadSignBoth0)"></svg:path>`,
})
export class IconParkTwotoneRoadSignBothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
