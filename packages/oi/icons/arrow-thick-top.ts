import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowThickTopIcon],svg[oi-arrow-thick-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.97 0L1 3h2v5h2V3h2z"></svg:path>`,
})
export class OiArrowThickTopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
