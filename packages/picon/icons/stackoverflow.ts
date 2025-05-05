import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStackoverflowIcon],svg[picon-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h2l2 2v1M2 3V2l4 1v1M2 6V5h4v1M0 8V4h1v3h6V4h1v4"></svg:path>`,
})
export class PiconStackoverflowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
