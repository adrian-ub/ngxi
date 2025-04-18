import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiAlignCenterIcon],svg[ooui-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15h18v2H1zM1 3h18v2H1z"></svg:path><svg:rect width="8" height="6" x="6" y="7" fill="currentColor" rx="1"></svg:rect>`,
})
export class OouiAlignCenterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
