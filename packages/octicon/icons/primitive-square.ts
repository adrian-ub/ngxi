import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPrimitiveSquareIcon],svg[octicon-primitive-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 12H0V4h8v8z" fill="currentColor"></svg:path>`,
})
export class OcticonPrimitiveSquareIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
