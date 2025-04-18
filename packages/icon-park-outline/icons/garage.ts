import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGarageIcon],svg[icon-park-outline-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5h36v38H6z"></svg:path><svg:path stroke-linejoin="round" d="M12 12h24v6H12z"></svg:path><svg:path d="M16 18v25m16-25v25M16 24h16m-16 6h16m-16 6h16"></svg:path></svg:g>`,
})
export class IconParkOutlineGarageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
