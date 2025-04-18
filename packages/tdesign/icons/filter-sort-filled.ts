import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilterSortFilledIcon],svg[tdesign-filter-sort-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.382 17.351L20 18.974l1.618-1.623l1.416 1.412L20 21.806l-3.034-3.042zm-.002-.714L20 15.015l1.619 1.622l1.415-1.414L20 12.185l-3.034 3.038zM3 3h18l-7 9.817V21h-4v-8.183z"></svg:path>`,
})
export class TdesignFilterSortFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
