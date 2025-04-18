import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleDownIcon],svg[gg-chevron-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.757 5.636L6.343 7.05L12 12.707l5.657-5.657l-1.414-1.414L12 9.88z"></svg:path><svg:path d="m6.343 12.707l1.414-1.414L12 15.536l4.243-4.243l1.414 1.414L12 18.364z"></svg:path></svg:g>`,
})
export class GgChevronDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
