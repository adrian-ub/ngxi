import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSwapRightIcon],svg[tdesign-swap-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.586L22.414 15H2v-2h15.586l-4-4z"></svg:path>`,
})
export class TdesignSwapRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
