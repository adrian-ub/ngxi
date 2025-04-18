import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalTowerOneIcon],svg[icon-park-signal-tower-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M12 44L20 4H28L36 44"></svg:path><svg:path d="M15 10H24H33"></svg:path><svg:path stroke-linejoin="round" d="M12 26L36 26"></svg:path><svg:path stroke-linejoin="round" d="M15 27L35 39"></svg:path><svg:path stroke-linejoin="round" d="M33 27L14 39"></svg:path><svg:path stroke-linejoin="round" d="M30 11L15 26"></svg:path><svg:path stroke-linejoin="round" d="M18 11L33 26"></svg:path></svg:g>`,
})
export class IconParkSignalTowerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
