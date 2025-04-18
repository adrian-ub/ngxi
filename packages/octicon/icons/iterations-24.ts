import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconIterations24Icon],svg[octicon-iterations-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 10.5a8 8 0 1 1 16 0a.75.75 0 0 0 1.5 0a9.5 9.5 0 1 0-9.5 9.5h10.94l-2.72 2.72a.75.75 0 1 0 1.06 1.06l3.735-3.735c.44-.439.44-1.151 0-1.59L19.78 14.72a.75.75 0 0 0-1.06 1.06l2.72 2.72H10.5a8 8 0 0 1-8-8"></svg:path>`,
})
export class OcticonIterations24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
