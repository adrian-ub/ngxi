import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCookIcon],svg[icon-park-outline-cook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 36V20H14v16a6 6 0 0 0 6 6h16a6 6 0 0 0 6-6M4 20h40M18 8v4m10-6v6m10-4v4"></svg:path>`,
})
export class IconParkOutlineCookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
