import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPreviousIcon],svg[flat-color-icons-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196F3" d="m30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z"></svg:path>`,
})
export class FlatColorIconsPreviousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
