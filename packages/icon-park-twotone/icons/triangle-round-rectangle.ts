import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTriangleRoundRectangleIcon],svg[icon-park-twotone-triangle-round-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTriangleRoundRectangle0"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 29H6v14h14zm4-25l10 17H14zm12 40a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTriangleRoundRectangle0)"></svg:path>`,
})
export class IconParkTwotoneTriangleRoundRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
