import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEqualIcon],svg[tdesign-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h16v2H4zm0 8h16v2H4z"></svg:path>`,
})
export class TdesignEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
