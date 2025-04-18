import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconZapIcon],svg[octicon-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 7H6l3-7l-9 9h4l-3 7l9-9z" fill="currentColor"></svg:path>`,
})
export class OcticonZapIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
