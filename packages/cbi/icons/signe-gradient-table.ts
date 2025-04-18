import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiSigneGradientTableIcon],svg[cbi-signe-gradient-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.6 15.5V1.4c0-.3-.2-.5-.5-.5H7.5c-.3 0-.5.2-.5.5v15.3c-.5.3-.8.7-.8 1.3v2.6c0 1.7 2.9 2.5 5.8 2.5s5.8-.9 5.8-2.5V18c0-1.8-3.2-2.6-6.2-2.5m-1 1.3c0 .1-.1.5-.8.5s-.8-.4-.8-.5V1.9h1.7v14.9z"></svg:path>`,
})
export class CbiSigneGradientTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
