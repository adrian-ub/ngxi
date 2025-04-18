import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBridgeTwoIcon],svg[icon-park-outline-bridge-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M8 13s6 10 16 10s16-10 16-10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10v28m32-28v28"></svg:path><svg:path stroke-linecap="round" d="M4 30.5s12.188-.597 20-.5c7.82.098 20 1 20 1M16 21v9m8-7v7m8-9v9M8 13l-4 5m40 0l-4-5"></svg:path></svg:g>`,
})
export class IconParkOutlineBridgeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
