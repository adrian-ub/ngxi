import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAliexpressIcon],svg[picon-aliexpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 7l1-1l1 1l-1 1M2 7l1-1l1 1l-1 1m4-3L6 6H2L0 0h1.5L2 1h5v3H4L3 3h3V2H2l1 3"></svg:path>`,
})
export class PiconAliexpressIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
