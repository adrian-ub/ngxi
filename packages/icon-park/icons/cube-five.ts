import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCubeFiveIcon],svg[icon-park-cube-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 27L24 44"></svg:path><svg:path d="M18 27L24 44"></svg:path><svg:path d="M18 27L30 27"></svg:path><svg:path d="M41 34L30 27"></svg:path><svg:path d="M41 14L30 27"></svg:path><svg:path d="M41 14L24 17"></svg:path><svg:path d="M30 27L24 17"></svg:path><svg:path d="M24 4V17"></svg:path><svg:path d="M7 14L24 17"></svg:path><svg:path d="M18 27L24 17"></svg:path><svg:path d="M18 27L7 14"></svg:path><svg:path d="M18 27L7 34"></svg:path><svg:path d="M41.3207 14L24.0002 4L6.67969 14V34L24.0002 44L41.3207 34V14Z"></svg:path></svg:g>`,
})
export class IconParkCubeFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
