import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSliceIcon],svg[tdesign-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.186 18.962l7.974 2.683l4.657-4.657l1.185 1.185l8.057-8.059a4.606 4.606 0 0 0-6.515-6.513zm10.13-7.303l6.643-6.644A2.606 2.606 0 1 1 20.645 8.7l-6.643 6.645zm1.087 3.915l-3.78 3.78l-3.742-1.26l5.021-5.02z"></svg:path>`,
})
export class TdesignSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
