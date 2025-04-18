import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIcecreamThreeIcon],svg[icon-park-outline-icecream-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M14 14c0-5.523 4.477-10 10-10s10 4.477 10 10v17.73a.27.27 0 0 1-.27.27H14.27a.27.27 0 0 1-.27-.27z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 32v9a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-9M14 16a7.07 7.07 0 0 0 10 0v0a7.07 7.07 0 0 1 10 0v0"></svg:path></svg:g>`,
})
export class IconParkOutlineIcecreamThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
