import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconForwardIcon],svg[picon-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H0v6h4L3 6H2V4h2v2l4-3l-4-3"></svg:path>`,
})
export class PiconForwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
