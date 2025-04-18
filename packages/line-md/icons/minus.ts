import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMinusIcon],svg[line-md-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></svg:animate></svg:path>`,
})
export class LineMdMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
