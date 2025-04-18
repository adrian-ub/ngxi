import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateXorIcon],svg[mdi-gate-xor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c3 6 3 10 0 16h2c3-6 3-10 .1-16zm4 0c3 6 3 10 0 16h3c5 0 9-3 13-8c-4-5-8-8-13-8zm3 2c3.8 0 7 2.1 10.3 6c-3.4 3.9-6.5 6-10.3 6q2.25-6 0-12"></svg:path>`,
})
export class MdiGateXorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
