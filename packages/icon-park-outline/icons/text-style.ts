import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTextStyleIcon],svg[icon-park-outline-text-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 6h10v10M17 32l2.188-5M31 32l-2.187-5m-9.625 0L24 16l4.813 11m-9.625 0h9.625M16 6H6v10m26 26h10V32M16 42H6V32"></svg:path>`,
})
export class IconParkOutlineTextStyleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
