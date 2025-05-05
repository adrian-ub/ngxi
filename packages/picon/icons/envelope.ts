import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEnvelopeIcon],svg[picon-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 2l3 2l3-2l-3 1m3 2V2H1v3M0 6V1h8v5"></svg:path>`,
})
export class PiconEnvelopeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
