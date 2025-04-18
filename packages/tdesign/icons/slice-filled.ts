import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSliceFilledIcon],svg[tdesign-slice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.186 18.962l7.974 2.683l4.657-4.657l1.185 1.185l8.057-8.059a4.606 4.606 0 0 0-6.515-6.513zm11.217-3.388l-3.78 3.78l-3.742-1.26l5.021-5.02z"></svg:path>`,
})
export class TdesignSliceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
