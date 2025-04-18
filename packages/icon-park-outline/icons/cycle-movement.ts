import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCycleMovementIcon],svg[icon-park-outline-cycle-movement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m20 15l4 4l4-4"></svg:path><svg:path d="M24 19V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v11M28 33l-4-4l-4 4"></svg:path><svg:path d="M24 29v11a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V29m29-9l-4 4l4 4"></svg:path><svg:path d="M29 24h11a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H29M15 28l4-4l-4-4"></svg:path><svg:path d="M19 24H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h11"></svg:path></svg:g>`,
})
export class IconParkOutlineCycleMovementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
