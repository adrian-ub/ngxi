import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconContainerIcon],svg[picon-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v6H0m2-5v4h.5V2M4 2v4h.5V2M6 2v4h.5V2"></svg:path>`,
})
export class PiconContainerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
