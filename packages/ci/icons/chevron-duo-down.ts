import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciChevronDuoDownIcon],svg[ci-chevron-duo-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.424l-6.01-6.01l1.414-1.415l4.6 4.6l4.6-4.6l1.406 1.415l-6.009 6.01H12ZM12 13L5.99 6.989l1.414-1.414l4.6 4.6l4.6-4.6l1.406 1.414l-6.009 6.01L12 13Z"></svg:path>`,
})
export class CiChevronDuoDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
