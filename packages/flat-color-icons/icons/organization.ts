import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsOrganizationIcon],svg[flat-color-icons-organization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M42 42H6V10c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4z"></svg:path><svg:path fill="#64B5F6" d="M6 42h36v2H6z"></svg:path><svg:path fill="#1565C0" d="M31 27h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6zm20 8h6v5h-6zm-20 0h6v5h-6zm20-16h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6zm20-8h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6zm10 24h6v9h-6z"></svg:path>`,
})
export class FlatColorIconsOrganizationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
