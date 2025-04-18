import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkToTopIcon],svg[icon-park-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0083 14.1006V42.0001"></svg:path><svg:path d="M12 26L24 14L36 26"></svg:path><svg:path d="M12 6H36"></svg:path></svg:g>`,
})
export class IconParkToTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
