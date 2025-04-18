import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextSortDescending24RegularIcon],svg[fluent-text-sort-descending-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2.75A.75.75 0 0 1 4.75 2H9.5a.75.75 0 0 1 .634 1.151L6.113 9.5H9.5a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1-.634-1.151L8.137 3.5H4.75A.75.75 0 0 1 4 2.75m2.368 9.727a.75.75 0 0 1 1.401.01l3.184 8.5a.75.75 0 0 1-1.405.526L8.794 19.5H5.238l-.79 2.022a.75.75 0 0 1-1.397-.545zM8.232 18l-1.18-3.15L5.823 18zM17.25 2a.75.75 0 0 1 .75.75v16.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V2.75a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentTextSortDescending24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
