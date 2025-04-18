import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsExpandIcon],svg[flat-color-icons-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196F3" d="M43 17.1L39.9 14L24 29.9L8.1 14L5 17.1L24 36z"></svg:path>`,
})
export class FlatColorIconsExpandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
