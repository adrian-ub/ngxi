import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFoldUpOneIcon],svg[icon-park-fold-up-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10L42 10"></svg:path><svg:path d="M6 20L42 20"></svg:path><svg:path d="M6 40L24 26L42 40"></svg:path></svg:g>`,
})
export class IconParkFoldUpOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
