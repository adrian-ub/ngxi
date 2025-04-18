import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkToTopOneIcon],svg[icon-park-to-top-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 33L24 21L36 33"></svg:path><svg:path d="M12 13H36"></svg:path></svg:g>`,
})
export class IconParkToTopOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
