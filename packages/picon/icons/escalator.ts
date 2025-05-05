import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEscalatorIcon],svg[picon-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4V1h1v2M2 8H0V6h2l4-4h2v2H6"></svg:path>`,
})
export class PiconEscalatorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
