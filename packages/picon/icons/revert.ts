import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRevertIcon],svg[picon-revert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4V2h1v3H2l1-1M1 2c0-3 7-3 7 2S1 9 1 6h1c0 2 5 2 5-2S2 0 2 2h1L1.5 4L0 2"></svg:path>`,
})
export class PiconRevertIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
