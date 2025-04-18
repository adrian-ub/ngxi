import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGarageIcon],svg[icon-park-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="38" x="6" y="5" stroke-linejoin="round"></svg:rect><svg:rect width="24" height="6" x="12" y="12" stroke-linejoin="round"></svg:rect><svg:path d="M16 18V43"></svg:path><svg:path d="M32 18V43"></svg:path><svg:path d="M16 24H32"></svg:path><svg:path d="M16 30H32"></svg:path><svg:path d="M16 36H32"></svg:path></svg:g>`,
})
export class IconParkGarageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
