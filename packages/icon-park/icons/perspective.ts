import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPerspectiveIcon],svg[icon-park-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 28V36L31 38.6M44 28L4 32M44 28V20M4 32V44L17 41.4M4 32V16M44 20V12L31 9.4M44 20L4 16M4 16V4L17 6.6M31 9.4V38.6M31 9.4L17 6.6M31 38.6L17 41.4M17 6.6V41.4"></svg:path>`,
})
export class IconParkPerspectiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
