import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTrousersBellBottomsIcon],svg[icon-park-twotone-trousers-bell-bottoms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTrousersBellBottoms0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="m16 12l2-8h12l2 8v12l4 17l-12 3l-12-3l4-17z"></svg:path><svg:path d="M24 44V16M12 41l12 3l12-3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTrousersBellBottoms0)"></svg:path>`,
})
export class IconParkTwotoneTrousersBellBottomsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
