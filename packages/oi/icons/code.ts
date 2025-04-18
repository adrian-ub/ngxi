import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCodeIcon],svg[oi-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1L2 7h1l3-6zM1 2L0 4l1 2h1L1 4l1-2zm5 0l1 2l-1 2h1l1-2l-1-2z"></svg:path>`,
})
export class OiCodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
