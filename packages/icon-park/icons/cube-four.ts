import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCubeFourIcon],svg[icon-park-cube-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15.3399 9L6.67969 14V24V34L15.3399 39L24.0002 44L32.6605 39L41.3207 34V24V14L32.6605 9L24.0002 4L15.3399 9Z"></svg:path><svg:path stroke="#fff" d="M24.0002 24L13.6079 30M24.0002 24V11V24ZM24.0002 24L34.3925 30L24.0002 24Z"></svg:path><svg:path stroke="#fff" d="M26.8147 35.375L24.0001 37L21.1855 35.375"></svg:path><svg:path stroke="#fff" d="M32.4438 15.875L35.2584 17.5V20.75"></svg:path><svg:path stroke="#fff" d="M12.7417 20.75V17.5L15.5563 15.875"></svg:path></svg:g>`,
})
export class IconParkCubeFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
