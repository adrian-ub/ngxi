import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBlackboardIcon],svg[icon-park-solid-blackboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBlackboard0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M8 7h32v24H8z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 7h40M15 41l9-10l9 10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 13h16m-16 6h12m-12 6h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBlackboard0)"></svg:path>`,
})
export class IconParkSolidBlackboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
