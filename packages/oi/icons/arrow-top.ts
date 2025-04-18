import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowTopIcon],svg[oi-arrow-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.47 0L1 3h2v5h1V3h2z"></svg:path>`,
})
export class OiArrowTopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
