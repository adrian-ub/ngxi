import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInvertLeftIcon],svg[icon-park-invert-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 15C10 22.2989 14.103 28.5832 20 31.4081C22.1347 32.4307 24.5046 33 27 33C36.3888 33 44 24.9411 44 15"></svg:path><svg:path d="M18 20L10 15L4 23"></svg:path></svg:g>`,
})
export class IconParkInvertLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
