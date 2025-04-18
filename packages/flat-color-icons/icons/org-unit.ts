import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsOrgUnitIcon],svg[flat-color-icons-org-unit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M10 10v28h28V10zm24 24H14V14h20z"></svg:path><svg:path fill="#D81B60" d="M6 6h12v12H6z"></svg:path><svg:path fill="#2196F3" d="M30 6h12v12H30zM6 30h12v12H6zm24 0h12v12H30z"></svg:path>`,
})
export class FlatColorIconsOrgUnitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
