import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSplitIcon],svg[picon-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h2v2l2 2l1-1v3H5l1-1l-2-2l-2 2l1 1H0V3l1 1l2-2"></svg:path>`,
})
export class PiconSplitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
