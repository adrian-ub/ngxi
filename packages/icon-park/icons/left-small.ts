import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftSmallIcon],svg[icon-park-left-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 23.9917H36"></svg:path><svg:path d="M24 36L12 24L24 12"></svg:path></svg:g>`,
})
export class IconParkLeftSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
