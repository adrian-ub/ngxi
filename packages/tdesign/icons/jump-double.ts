import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignJumpDoubleIcon],svg[tdesign-jump-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v14h-3v-2h1V4H10v1H8V2zM2 7h6v2H4v11h11v-4h2v6H2zm8 0h7v7h-2v-3.586l-5 5L8.586 14l5-5H10z"></svg:path>`,
})
export class TdesignJumpDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
