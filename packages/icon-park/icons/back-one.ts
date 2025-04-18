import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBackOneIcon],svg[icon-park-back-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33"></svg:path><svg:path d="M18 28L10 33L4 25"></svg:path></svg:g>`,
})
export class IconParkBackOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
