import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMailPackageIcon],svg[icon-park-mail-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42H44V30V18H24H4V30V42Z"></svg:path><svg:path stroke-linecap="round" d="M4 18L24 33L44 18"></svg:path><svg:path stroke-linecap="round" d="M24 18H4V33"></svg:path><svg:path stroke-linecap="round" d="M44 33V18H24"></svg:path><svg:path stroke-linecap="round" d="M12 12H36"></svg:path><svg:path stroke-linecap="round" d="M16 6H32"></svg:path></svg:g>`,
})
export class IconParkMailPackageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
