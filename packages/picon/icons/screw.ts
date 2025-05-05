import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconScrewIcon],svg[picon-screw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v1l2-2M3 4v1l2-2M3 2v1l2-2m0 6L4 8L3 7V1L1 0h6L5 1"></svg:path>`,
})
export class PiconScrewIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
