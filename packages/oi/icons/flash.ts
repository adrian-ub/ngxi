import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiFlashIcon],svg[oi-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 0L2 3h2l-.66 2H2l1 3l3-3H4.5L6 2H4l1-2z"></svg:path>`,
})
export class OiFlashIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
