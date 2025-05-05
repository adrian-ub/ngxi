import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBathIcon],svg[picon-bath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V1h2M0 6V1h2L1 2v3h7v1L7 8L6 7H2L1 8"></svg:path>`,
})
export class PiconBathIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
