import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLineDiagonalIcon],svg[proicons-line-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m21.25 2.75l-18.5 18.5"></svg:path>`,
})
export class ProiconsLineDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
