import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPiIcon],svg[picon-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 2l1-1h7v1H6v3c0 1 1 2 2 0c0 3-3 3-3 0V2H3v5H2V2"></svg:path>`,
})
export class PiconPiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
