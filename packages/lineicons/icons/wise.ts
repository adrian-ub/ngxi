import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsWiseIcon],svg[lineicons-wise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.401 8.204L2 14.544h9.667l1.096-2.975H8.614l2.544-2.935v-.078L9.516 5.738h7.397L11.159 21.51h3.913L22 2.489H4.114z"></svg:path>`,
})
export class LineiconsWiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
