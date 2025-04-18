import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLiraIcon],svg[bx-lira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21h2c4.411 0 8-4.038 8-9h-2c0 3.86-2.691 7-6 7v-7.358l6-1.385V8.204l-6 1.385V7.642l6-1.385V4.204l-6 1.385V3H9v3.05l-3 .693v2.053l3-.692v1.947l-3 .692v2.053l3-.692z"></svg:path>`,
})
export class BxLiraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
