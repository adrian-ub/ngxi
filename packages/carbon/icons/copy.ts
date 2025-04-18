import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCopyIcon],svg[carbon-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"></svg:path>`,
})
export class CarbonCopyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
