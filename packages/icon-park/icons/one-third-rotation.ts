import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOneThirdRotationIcon],svg[icon-park-one-third-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36.0001 40.015C32.6575 42.5122 28.5025 44 24.0001 44C16.5973 44 10.1338 39.978 6.67578 34H15.0001"></svg:path><svg:path d="M32 5.66406C39.0636 8.75029 44 15.7986 44 23.9999C44 27.6428 43.0261 31.0582 41.3244 33.9999L37.282 26.9999"></svg:path><svg:path d="M4.09875 26C4.03344 25.3422 4 24.675 4 24C4 12.9543 12.9543 4 24 4L19.9577 11"></svg:path><svg:path fill="#2F88FF" d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"></svg:path></svg:g>`,
})
export class IconParkOneThirdRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
