import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSimIcon],svg[icon-park-outline-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4h24.889L40 11.273V44H8z"></svg:path><svg:path d="M33 26H15v10h18z"></svg:path><svg:path stroke-linecap="round" d="M15 12v6m6-6v6m6-6v6"></svg:path></svg:g>`,
})
export class IconParkOutlineSimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
