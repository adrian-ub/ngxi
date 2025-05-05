import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFunctionIcon],svg[picon-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h2v1H2v7H0V7h1M0 3h3v1H0m4 3l3-3v1L4 8m0-4l3 3v1L4 5"></svg:path>`,
})
export class PiconFunctionIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
