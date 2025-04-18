import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaResetInstanceIcon],svg[icon-park-figma-reset-instance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24L24 4L4 24L24 44L35 33"></svg:path><svg:path d="M22 24.0002C22 24.0002 34.5 23.5002 39.5 28.5002C44.5 33.5002 39 44.0002 39 44.0002"></svg:path><svg:path d="M26 20L22 24L26 28"></svg:path></svg:g>`,
})
export class IconParkFigmaResetInstanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
