import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMinusRectangleFilledIcon],svg[tdesign-minus-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm4.5 9v2h11v-2z"></svg:path>`,
})
export class TdesignMinusRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
