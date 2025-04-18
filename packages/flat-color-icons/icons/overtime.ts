import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsOvertimeIcon],svg[flat-color-icons-overtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CFD8DC" d="M12 40V20h32v20c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#78909C" d="M44 16v6H12v-6c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4"></svg:path><svg:g fill="#37474F"><svg:circle cx="37" cy="16" r="3"></svg:circle><svg:circle cx="20" cy="16" r="3"></svg:circle></svg:g><svg:path fill="#B0BEC5" d="M37 10c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2m-17 0c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2"></svg:path><svg:path fill="#90A4AE" d="M32 34h4v4h-4zm-6 0h4v4h-4zm-6 0h4v4h-4zm12-6h4v4h-4zm-6 0h4v4h-4zm-6 0h4v4h-4z"></svg:path><svg:circle cx="16" cy="15" r="12" fill="#F44336"></svg:circle><svg:circle cx="16" cy="15" r="9" fill="#eee"></svg:circle><svg:path d="M15 8h2v7h-2z"></svg:path><svg:path d="m20.518 18.1l-1.343 1.344l-3.818-3.818l1.344-1.343z"></svg:path><svg:circle cx="16" cy="15" r="1.5"></svg:circle>`,
})
export class FlatColorIconsOvertimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
