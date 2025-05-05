import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTouchIcon],svg[picon-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1l2 2V0h1v3l4 2l-1 3H3"></svg:path>`,
})
export class PiconTouchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
