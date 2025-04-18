import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCycleMovementIcon],svg[icon-park-cycle-movement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 15L24 19L28 15"></svg:path><svg:path d="M24 19V8C24 5.79086 25.7909 4 28 4H40C42.2091 4 44 5.79086 44 8V19"></svg:path><svg:path d="M28 33L24 29L20 33"></svg:path><svg:path d="M24 29V40C24 42.2091 22.2091 44 20 44H8C5.79086 44 4 42.2091 4 40V29"></svg:path><svg:path d="M33 20L29 24L33 28"></svg:path><svg:path d="M29 24H40C42.2091 24 44 25.7909 44 28V40C44 42.2091 42.2091 44 40 44H29"></svg:path><svg:path d="M15 28L19 24L15 20"></svg:path><svg:path d="M19 24H8C5.79086 24 4 22.2091 4 20V8C4 5.79086 5.79086 4 8 4H19"></svg:path></svg:g>`,
})
export class IconParkCycleMovementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
