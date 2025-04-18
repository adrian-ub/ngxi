import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiAlignRightIcon],svg[ooui-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h7v2H1zm0 4h7v2H1zm0 4h18v2H1zM1 3h18v2H1z"></svg:path><svg:rect width="8" height="6" x="11" y="7" fill="currentColor" rx="1"></svg:rect>`,
})
export class OouiAlignRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
