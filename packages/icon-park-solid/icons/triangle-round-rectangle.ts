import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTriangleRoundRectangleIcon],svg[icon-park-solid-triangle-round-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 29H6v14h14zm4-25l10 17H14zm12 40a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class IconParkSolidTriangleRoundRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
