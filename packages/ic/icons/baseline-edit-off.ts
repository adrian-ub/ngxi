import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineEditOffIcon],svg[ic-baseline-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.126 8.125l1.937-1.937l3.747 3.747l-1.937 1.938zM20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83l3.75 3.75L20.71 7a1 1 0 0 0 0-1.37M2 5l6.63 6.63L3 17.25V21h3.75l5.63-5.62L18 21l2-2L4 3z"></svg:path>`,
})
export class IcBaselineEditOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
