import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAnchorIcon],svg[carbon-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 28.086L7.085 23.5L8.5 24.915L3.914 29.5zm7-7l4.585-4.586l1.415 1.415l-4.586 4.585zm7-7L21.085 9.5l1.415 1.415l-4.586 4.585zm7-7L28.085 2.5L29.5 3.915L24.914 8.5z"></svg:path>`,
})
export class CarbonAnchorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
