import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextRotationNoneIcon],svg[icon-park-text-rotation-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 29L16.6667 21M35 29L31.3333 21M31.3333 21L29.5 17L24 5L18.5 17L16.6667 21M31.3333 21H16.6667"></svg:path><svg:path d="M6 37H42L36 43"></svg:path></svg:g>`,
})
export class IconParkTextRotationNoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
