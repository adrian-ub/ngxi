import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSinkIcon],svg[picon-sink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 8l1-3Q0 5 0 2h8q0 3-3 3l1 3M3 2V0h1v2m2 0V1h1v1M1 2V1h1v1"></svg:path>`,
})
export class PiconSinkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
