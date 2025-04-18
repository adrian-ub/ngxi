import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCollapseDownIcon],svg[oi-collapse-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v2h8V0zm2 3l2 2l2-2zM0 7v1h8V7z"></svg:path>`,
})
export class OiCollapseDownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
