import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsPinIcon],svg[grommet-icons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m16 3l-6 6s-4-1-7 2l10 10c3-3 2-7 2-7l6-6zM1 23l7-7m6-15l9 9"></svg:path>`,
})
export class GrommetIconsPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
