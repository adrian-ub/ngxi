import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSwapLeftIcon],svg[tdesign-swap-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.414 9l-4 4H22v2H1.586L9 7.586z"></svg:path>`,
})
export class TdesignSwapLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
