import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSelectboxIcon],svg[picon-selectbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3V0h8v3M4 1l1.5 2L7 1M2 5V4h4v1M2 7V6h4v1M1 3v5h6V3"></svg:path>`,
})
export class PiconSelectboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
