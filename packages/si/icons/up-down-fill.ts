import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siUpDownFillIcon],svg[si-up-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 6.414v11.172l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 17.586V6.414L9.707 7.707a1 1 0 0 1-1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class SiUpDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
