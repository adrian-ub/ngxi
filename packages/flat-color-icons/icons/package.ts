import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPackageIcon],svg[flat-color-icons-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9800" d="M38 42H10c-2.2 0-4-1.8-4-4V10c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#8A5100" d="M29.5 16h-11c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h11c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class FlatColorIconsPackageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
