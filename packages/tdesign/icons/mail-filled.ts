import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMailFilledIcon],svg[tdesign-mail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v2.83l11 5.55l11-5.551z"></svg:path><svg:path fill="currentColor" d="M23 8.069L12 13.62L1 8.07V21h22z"></svg:path>`,
})
export class TdesignMailFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
