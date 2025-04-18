import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsManagerIcon],svg[flat-color-icons-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9800" d="m24 37l-5-6v-6h10v6z"></svg:path><svg:g fill="#FFA726"><svg:circle cx="33" cy="19" r="2"></svg:circle><svg:circle cx="15" cy="19" r="2"></svg:circle></svg:g><svg:path fill="#FFB74D" d="M33 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9z"></svg:path><svg:path fill="#FF5722" d="M24 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4l4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2z"></svg:path><svg:g fill="#784719"><svg:circle cx="28" cy="19" r="1"></svg:circle><svg:circle cx="20" cy="19" r="1"></svg:circle></svg:g><svg:path fill="#CFD8DC" d="m29 31l-5 1l-5-1S8 33 8 44h32c0-11-11-13-11-13"></svg:path><svg:path fill="#3F51B5" d="m23 35l-1 9h4l-1-9l1-1l-2-2l-2 2z"></svg:path>`,
})
export class FlatColorIconsManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
