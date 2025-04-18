import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFileIcon],svg[flat-color-icons-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M40 45H8V3h22l10 10z"></svg:path><svg:path fill="#E1F5FE" d="M38.5 14H29V4.5z"></svg:path>`,
})
export class FlatColorIconsFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
