import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconForestIcon],svg[picon-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8H5V3L4 2l1-2l2 2H6l2 2H6l2 2H6M3 8H2V6H0l2-2H0l2-2H1l1.5-2L4 2H3l2 2H3l2 2H3"></svg:path>`,
})
export class PiconForestIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
