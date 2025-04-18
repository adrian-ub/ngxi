import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAirplaneWindowOneIcon],svg[icon-park-outline-airplane-window-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="m30.349 32l6.506-24.282a3 3 0 0 1 3.675-2.122v0a3 3 0 0 1 2.12 3.675L36.56 32M36 32v6H13a3 3 0 1 1 0-6zM21 44h8"></svg:path><svg:rect width="10" height="20" x="6" y="4" rx="5"></svg:rect><svg:path stroke-linecap="round" d="M6 14h10M6 9v10M16 9v10"></svg:path></svg:g>`,
})
export class IconParkOutlineAirplaneWindowOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
