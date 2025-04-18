import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateXnorIcon],svg[mdi-gate-xnor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c3 6 3 10 0 16h2c3-6 3-10 .1-16zm4 0c3 6 3 10 0 16h3c3.2 0 5.8-3.2 7.7-6c.58.65 1.42 1 2.3 1a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-.88 0-1.72.35-2.3 1c-2-2.8-4.5-6-7.7-6zm3 2c3 0 5 4 6.5 6C14 14 12 18 9 18q2.4-6 0-12m10 5c.5 0 1 .5 1 1s-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1"></svg:path>`,
})
export class MdiGateXnorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
