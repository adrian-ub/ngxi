import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMinusIcon],svg[tdesign-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.502 11h11v2h-11z"></svg:path>`,
})
export class TdesignMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
