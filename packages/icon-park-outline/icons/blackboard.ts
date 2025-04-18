import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBlackboardIcon],svg[icon-park-outline-blackboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 7h32v24H8z"></svg:path><svg:path stroke-linecap="round" d="M4 7h40M15 41l9-10l9 10M16 13h16m-16 6h12m-12 6h6"></svg:path></svg:g>`,
})
export class IconParkOutlineBlackboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
