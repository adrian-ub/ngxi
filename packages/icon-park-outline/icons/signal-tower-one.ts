import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSignalTowerOneIcon],svg[icon-park-outline-signal-tower-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="m12 44l8-40h8l8 40"></svg:path><svg:path d="M15 10h18"></svg:path><svg:path stroke-linejoin="round" d="M12 26h24m-21 1l20 12m-2-12L14 39m16-28L15 26m3-15l15 15"></svg:path></svg:g>`,
})
export class IconParkOutlineSignalTowerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
