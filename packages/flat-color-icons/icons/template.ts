import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsTemplateIcon],svg[flat-color-icons-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BBDEFB" d="M4 7h40v34H4z"></svg:path><svg:path fill="#3F51B5" d="M9 12h30v5H9z"></svg:path><svg:path fill="#2196F3" d="M9 21h13v16H9zm17 0h13v16H26z"></svg:path>`,
})
export class FlatColorIconsTemplateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
