import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextSubscriptIcon],svg[proicons-text-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.75 4.75l10.5 12.5m0-12.5l-10.5 12.5m12.677-1.088a1.912 1.912 0 1 1 3.263 1.352l-2.88 3.236h3.359"></svg:path>`,
})
export class ProiconsTextSubscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
