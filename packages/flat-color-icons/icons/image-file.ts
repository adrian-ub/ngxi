import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsImageFileIcon],svg[flat-color-icons-image-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M40 45H8V3h22l10 10z"></svg:path><svg:path fill="#E1F5FE" d="M38.5 14H29V4.5z"></svg:path><svg:path fill="#1565C0" d="m21 23l-7 10h14z"></svg:path><svg:path fill="#1976D2" d="M28 26.4L23 33h10z"></svg:path><svg:circle cx="31.5" cy="24.5" r="1.5" fill="#1976D2"></svg:circle>`,
})
export class FlatColorIconsImageFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
