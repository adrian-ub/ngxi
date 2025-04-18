import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerRightDownIcon],svg[icon-park-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 34L28 42L36 34"></svg:path><svg:path d="M12 10H25C26.6569 10 28 11.3431 28 13V42"></svg:path></svg:g>`,
})
export class IconParkCornerRightDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
