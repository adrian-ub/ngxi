import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderShield2FillIcon],svg[ri-folder-shield-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H12v7.382c0 1.409.632 2.734 1.705 3.618H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-8 2h8v5.382c0 .897-.446 1.734-1.187 2.23L18 21.499l-2.812-1.885A2.68 2.68 0 0 1 14 17.383z"></svg:path>`,
})
export class RiFolderShield2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
