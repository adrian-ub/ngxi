import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMountainIcon],svg[icon-park-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M18 10L32 38H4L18 10Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M28 29L33.6471 22L44 38H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 22L24 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14 18L10 26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M22 18L26 26"></svg:path></svg:g>`,
})
export class IconParkMountainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
