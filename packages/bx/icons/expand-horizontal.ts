import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxExpandHorizontalIcon],svg[bx-expand-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.29 5.64L1.93 12l6.36 6.36l1.42-1.41L4.76 12l4.95-4.95zm6 1.41L19.24 12l-4.95 4.95l1.42 1.41L22.07 12l-6.36-6.36z"></svg:path>`,
})
export class BxExpandHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
